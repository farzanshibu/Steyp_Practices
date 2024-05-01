from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Food(models.Model):

    name = models.CharField(max_length=50)
    featured_image = models.ImageField(
        upload_to="Food/Featured-Image",
        null=True,
        blank=True,
        default="Food/Featured-Image/dfir.png",
    )
    description = models.TextField()
    category_name = models.ForeignKey("Category", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_featured = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class Category(models.Model):

    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to="Category/", null=True, blank=True)

    def __str__(self):
        return self.name


class Recipes(models.Model):

    food = models.ForeignKey("food", on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    image = models.ImageField(
        upload_to="Recipes/", null=True, blank=True, default="Recipes/dfir.png"
    )

    def __str__(self):
        return self.name


class Gallery(models.Model):

    food = models.ForeignKey("food", on_delete=models.CASCADE)
    image = models.ImageField(
        upload_to="Gallery/", null=True, blank=True, default="Gallery/dfir.png"
    )


class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    food = models.ForeignKey(Food, on_delete=models.CASCADE)

    class Meta:
        unique_together = (("user", "food"),)

    def __str__(self):
        return f"{self.user.username} favorites {self.food.name}"
