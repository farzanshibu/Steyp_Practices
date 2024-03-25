from django.urls import path
from .views import (
    place,
    placeDetails,
    listReview,
    like_toggle_view,
    CreateReviewCreateAPIView,
)

urlpatterns = [
    path("", place, name="place"),
    path("view/<int:id>/", placeDetails, name="name-details"),
    path(
        "view/<int:id>/list-review/",
        listReview,
        name="list-review",
    ),
    path(
        "view/<int:id>/like/",
        like_toggle_view,
        name="like",
    ),
    path(
        "view/<int:id>/review/",
        CreateReviewCreateAPIView.as_view(),
        name="create_comment",
    ),
    path(
        "view/<int:id>/review/<int:comment_id>/replies/",
        CreateReviewCreateAPIView.as_view(),
        name="create_reply",
    ),
]
