from django.db import models
from django.contrib.auth.models import User
from .validators import validate_file_extension


# Create your models here.
class StudentDetails(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=32)
    student_class = models.IntegerField()
    division = models.CharField(max_length=1)
    image = models.ImageField(
        upload_to="images/",
        default="images/default.webp",
        validators=[validate_file_extension],
        blank=True,
        null=True,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Student Details"
