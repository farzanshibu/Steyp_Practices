from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Place(models.Model):

    name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    featured_image = models.ImageField(upload_to="place/featured-image")
    description = models.TextField()
    category_name = models.ForeignKey("Category", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now=True)
    is_featured = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class Category(models.Model):

    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to="category/")

    def __str__(self):
        return self.name


class Gallery(models.Model):

    place = models.ForeignKey("Place", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="gallery/")


class Comment(models.Model):
    user_details = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField()
    place = models.ForeignKey(
        "Place",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )
    parent_comment = models.ForeignKey(
        "self", on_delete=models.CASCADE, null=True, blank=True, related_name="replies"
    )
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user_details.username


class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    place = models.ForeignKey(Place, on_delete=models.CASCADE)

    class Meta:
        unique_together = (("user", "place"),)

    def __str__(self):
        return f"{self.user.username} likes {self.place.name}"
