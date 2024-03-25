from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import generics

from rest_framework.views import APIView

from web.models import Place, Comment, Like
from .serializers import (
    CreateReviewSerializer,
    LikeSerializer,
    CommentSerializer,
    PlaceSerializer,
    PlaceDetailsSerializer,
)


@api_view(["GET"])
@permission_classes([AllowAny])
def place(request):
    places = Place.objects.filter(is_deleted=False)
    context = {"request": request}
    place_serializer = PlaceSerializer(places, many=True, context=context)
    response_data = {"status_code": 6000, "data": place_serializer.data}
    return Response(response_data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def placeDetails(request, id):
    place = Place.objects.filter(id=id, is_deleted=False)
    if place:
        context = {"request": request}
        place_details_serializer = PlaceDetailsSerializer(
            place, context=context, many=True
        )
        response_data = {"status_code": 6000, "data": place_details_serializer.data}
    else:
        response_data = {"status_code": 6001, "message": "Item not found"}

    return Response(response_data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def like_toggle_view(request, id):
    user = request.user
    try:
        like = Like.objects.get(user=user, place_id=id)
        like.delete()
        return Response({"status_code": 6000, "message": "Like removed"})
    except Like.DoesNotExist:
        like_data = {"user": user.id, "place": id}
        serializer = LikeSerializer(data=like_data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status_code": 6000, "message": "Liked"})
        return Response(serializer.errors)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def listReview(request, id):
    place = Place.objects.filter(id=id, is_deleted=False)
    if place:
        review = Comment.objects.filter(place=id, parent_comment__isnull=True)
        if review:
            serializer = CommentSerializer(review, many=True)
            response_data = {"status_code": 6000, "data": serializer.data}
        else:
            response_data = {"status_code": 6000, "message": "No Review found"}
    else:
        response_data = {"status_code": 6001, "message": "Item not found"}

    return Response(response_data)


class CreateReviewCreateAPIView(generics.CreateAPIView):
    serializer_class = CreateReviewSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        place_id = self.kwargs.get("id")
        place = Place.objects.filter(id=place_id).first()
        if not place:
            return Response(
                {
                    "status_code": 6001,
                    "message": "Place not Found",
                }
            )

        comment_id = kwargs.get("comment_id")
        if comment_id is None:
            # Creating a new comment
            serializer = self.get_serializer(
                data=request.data, context={"request": request, "place_id": place_id}
            )
        else:
            # Replying to an existing comment
            try:
                parent_comment = Comment.objects.get(id=comment_id)
            except Comment.DoesNotExist:
                return Response(
                    {"status_code": 6002, "message": "Parent comment does not exist"}
                )

            serializer = self.get_serializer(
                data=request.data,
                context={
                    "request": request,
                    "place_id": place_id,
                    "parent_comment": parent_comment,
                },
            )

        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        return Response(
            {
                "status_code": 6000,
                "message": "Posted Successfully",
            }
        )

    def perform_create(self, serializer):
        serializer.save()
