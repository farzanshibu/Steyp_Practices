from django.urls import path
from .views import (
    favorite_view,
    food,
    food_create_view,
    food_details_and_delete,
    favorite_toggle_view,
)

urlpatterns = [
    path("", food, name="list-food-recipes"),
    path(
        "view/create/",
        food_create_view,
        name="create-food-recipe",
    ),
    path("view/<int:id>/", food_details_and_delete, name="food-details"),
    path(
        "view/<int:id>/favorite/",
        favorite_toggle_view,
        name="favorite-toggle-food-recipes",
    ),
    path(
        "view/favorite/",
        favorite_view,
        name="favorite-food-recipes",
    ),
]
