from rest_framework import serializers

# import model from models.py
from web.models import Food, Gallery, Favorite, Recipes


class FoodsSerializer(serializers.ModelSerializer):
    favorites = serializers.SerializerMethodField()

    class Meta:
        model = Food
        fields = ("id", "name", "featured_image", "is_featured", "favorites")

    def get_favorites(self, instance):
        favorites = Favorite.objects.filter(food=instance)
        return favorites.count()


class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ("id", "image")


class RecipesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipes
        fields = ("id", "name", "image")


class FoodsDetailsSerializer(serializers.ModelSerializer):
    category_name = serializers.SerializerMethodField()
    gallery = serializers.SerializerMethodField()
    favorites = serializers.SerializerMethodField()
    recipes = serializers.SerializerMethodField()

    class Meta:
        model = Food
        fields = (
            "id",
            "name",
            "featured_image",
            "description",
            "is_featured",
            "category_name",
            "gallery",
            "favorites",
            "recipes",
        )

    def get_category_name(self, instance):
        return instance.category_name.name

    def get_gallery(self, instance):
        images = Gallery.objects.filter(food=instance)
        context = {"request": self.context.get("request")}
        serializer = GallerySerializer(images, many=True, context=context)
        return serializer.data

    def get_favorites(self, instance):
        favorites = Favorite.objects.filter(food=instance)
        user = self.context["request"].user
        if user:
            favorite = favorites.filter(user=user)
        return {
            "current_user_favorited": bool(favorite.count()),
            "total_favorites": favorites.count(),
        }

    def get_recipes(self, instance):
        recipes = Recipes.objects.filter(food=instance)
        context = {"request": self.context.get("request")}
        serializer = RecipesSerializer(recipes, many=True, context=context)
        return serializer.data


class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = ("user", "food")


class FoodSerializer(serializers.ModelSerializer):
    recipes = RecipesSerializer(many=True, required=False)
    gallery = GallerySerializer(many=True, required=False)

    class Meta:
        model = Food
        fields = [
            "id",
            "name",
            "featured_image",
            "description",
            "category_name",
            "is_featured",
            "recipes",
            "gallery",
        ]

    def create(self, validated_data):
        recipes_data = validated_data.pop("recipes", [])
        gallery_data = validated_data.pop("gallery", [])
        user = self.context["user"]
        validated_data["user"] = user
        food = Food.objects.create(**validated_data)

        for recipe_data in recipes_data:
            Recipes.objects.create(food=food, **recipe_data)

        for image_data in gallery_data:
            Gallery.objects.create(food=food, **image_data)

        return food

    def update(self, instance, validated_data):
        recipes_data = validated_data.pop("recipes", [])
        gallery_data = validated_data.pop("gallery", [])

        instance.name = validated_data.get("name", instance.name)
        instance.featured_image = validated_data.get(
            "featured_image", instance.featured_image
        )
        instance.description = validated_data.get("description", instance.description)
        instance.category_name = validated_data.get(
            "category_name", instance.category_name
        )
        instance.is_featured = validated_data.get("is_featured", instance.is_featured)
        instance.save()

        instance.recipes_set.all().delete()
        for recipe_data in recipes_data:
            Recipes.objects.create(food=instance, **recipe_data)

        instance.gallery_set.all().delete()
        for image_data in gallery_data:
            Gallery.objects.create(food=instance, **image_data)

        return instance
