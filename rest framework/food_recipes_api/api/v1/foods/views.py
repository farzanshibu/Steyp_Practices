from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.exceptions import PermissionDenied

from django.contrib.auth.models import User
from web.models import Food, Favorite
from .serializers import (
    FoodSerializer,
    FoodsDetailsSerializer,
    FoodsSerializer,
    FavoriteSerializer,
)


@api_view(["GET"])
@permission_classes([AllowAny])
def food(request):
    # add filter option form request
    category_filter = request.GET.get("filter")
    if category_filter is not None and not category_filter:
        return Response({"status_code": 6001, "message": "Invalid Request"}, status=400)
    if category_filter and category_filter.isdigit():
        foods = Food.objects.filter(is_deleted=False, category_name=category_filter)
    else:
        foods = Food.objects.filter(is_deleted=False)
    context = {"request": request}
    food_serializer = FoodsSerializer(foods, many=True, context=context)
    response_data = {"status_code": 6000, "data": food_serializer.data}
    return Response(response_data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def favorite_view(request):
    user = request.user
    favorites = Favorite.objects.filter(user=user)
    favorites_food = Food.objects.filter(
        id__in=favorites.values_list("food_id"), is_deleted=False
    )
    context = {"request": request}
    favorite_serializer = FoodsSerializer(favorites_food, many=True, context=context)
    response_data = {"status_code": 6000, "data": favorite_serializer.data}
    return Response(response_data)


@api_view(["GET", "DELETE", "PUT"])
@permission_classes([IsAuthenticated])
def food_details_and_delete(request, id):
    try:
        food = Food.objects.get(id=id, is_deleted=False)
    except Food.DoesNotExist:
        return Response({"status_code": 6001, "message": "Food Recipes not found"})

    if request.method == "GET":
        context = {"request": request}
        food_details_serializer = FoodsDetailsSerializer(
            food, context=context, many=False
        )
        response_data = {"status_code": 6000, "data": food_details_serializer.data}
        return Response(response_data)

    elif request.method == "DELETE":
        if food.user != request.user and not request.user.is_superuser:
            return Response(
                {
                    "status_code": 6001,
                    "message": "You are not authorized to delete this food recipe.",
                }
            )

        food.is_deleted = True
        food.save()
        return Response(
            {"status_code": 6000, "message": "Food Recipes deleted successfully"}
        )

    elif request.method == "PUT":
        if food.user != request.user:
            raise PermissionDenied("You are not the owner of this food recipe.")

        serializer = FoodSerializer(food, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"status_code": 6000, "message": "Food Recipes updated successfully"}
            )
        return Response(
            {
                "status_code": 6001,
                "message": "Validation Error Occurred",
                "errors": serializer.errors,
            }
        )

    else:
        return Response({"status_code": 6001, "message": "Invalid Request"})


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def favorite_toggle_view(request, id):
    user = request.user
    try:
        favorite = Favorite.objects.get(user=user, food_id=id)
        favorite.delete()
        return Response({"status_code": 6000, "message": "Removed from Favourite"})
    except Favorite.DoesNotExist:
        favorite_data = {"user": user.id, "food": id}
        serializer = FavoriteSerializer(data=favorite_data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status_code": 6000, "message": "Added to Favourite"})
        return Response(serializer.errors)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def food_create_view(request):
    user = request.user
    serializer = FoodSerializer(data=request.data, context={"user": user})
    if serializer.is_valid():
        serializer.save()
        return Response({"status_code": 6000, "message": "New Food Recipe Created"})
    return Response(
        {
            "status_code": 6001,
            "message": "Validation Error Occurred",
            "errors": serializer.errors,
        }
    )
