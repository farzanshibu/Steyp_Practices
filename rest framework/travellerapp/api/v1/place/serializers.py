from rest_framework import serializers

# import model from models.py
from web.models import Place, Gallery, Comment, Like


class PlaceSerializer(serializers.ModelSerializer):
    likes = serializers.SerializerMethodField()

    class Meta:
        model = Place
        fields = ("id", "name", "location", "featured_image", "is_featured", "likes")

    def get_likes(self, instance):
        likes = Like.objects.filter(place=instance)
        return likes.count()


class CommentSerializer(serializers.ModelSerializer):
    user_details = serializers.SerializerMethodField()
    profile_image = serializers.SerializerMethodField()
    created_at = serializers.SerializerMethodField()
    replies = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = (
            "id",
            "description",
            "created_at",
            "user_details",
            "profile_image",
            "replies",
        )

    def get_replies(self, instance):
        replies = instance.replies.all()
        return CommentSerializer(replies, many=True).data

    def get_user_details(self, instance):
        return instance.user_details.username

    def get_profile_image(self, instance):
        return f"https://ui-avatars.com/api/?name={instance.user_details.username}"

    def get_created_at(self, instance):
        return instance.created_at.strftime("%d %B %Y")


class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ("id", "image")


class PlaceDetailsSerializer(serializers.ModelSerializer):
    category_name = serializers.SerializerMethodField()
    gallery = serializers.SerializerMethodField()
    likes = serializers.SerializerMethodField()

    class Meta:
        model = Place
        fields = (
            "id",
            "name",
            "location",
            "featured_image",
            "description",
            "is_featured",
            "category_name",
            "gallery",
            "likes",
        )

    def get_category_name(self, instance):
        return instance.category_name.name

    def get_gallery(self, instance):
        images = Gallery.objects.filter(place=instance)
        context = {"request": self.context.get("request")}
        serializer = GallerySerializer(images, many=True, context=context)
        return serializer.data

    def get_likes(self, instance):
        likes = Like.objects.filter(place=instance)
        user = self.context["request"].user
        if user:
            like = likes.filter(user=user)
        return {"current_user_liked": bool(like.count()), "total_likes": likes.count()}


class CreateReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ("description",)
        read_only_fields = ("place", "user_details")

    def create(self, validated_data):
        user = self.context["request"].user
        place_id = self.context.get("place_id")
        parent_comment = self.context.get("parent_comment")

        if place_id:
            validated_data["place_id"] = place_id
        if parent_comment:
            validated_data["parent_comment"] = parent_comment

        validated_data["user_details"] = user
        comment = Comment.objects.create(**validated_data)
        return comment


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ("user", "place")
