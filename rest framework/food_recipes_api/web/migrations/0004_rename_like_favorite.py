# Generated by Django 5.0.3 on 2024-04-11 21:11

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("web", "0003_food_user_alter_category_image_and_more"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Like",
            new_name="Favorite",
        ),
    ]