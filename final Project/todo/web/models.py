from django.db import models

from auths.models import StudentDetails


# Create your models here.
class Todos(models.Model):
    title = models.CharField(max_length=32)
    user = models.ForeignKey(StudentDetails, on_delete=models.CASCADE)
    isCompleted = models.BooleanField(default=False)
    isDeleted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "TODOs"
