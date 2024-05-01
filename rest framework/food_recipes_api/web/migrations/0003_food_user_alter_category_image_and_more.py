# Generated by Django 5.0.3 on 2024-04-11 05:52

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("web", "0002_alter_category_image_alter_gallery_image_recipes"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name="food",
            name="user",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                to=settings.AUTH_USER_MODEL,
            ),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="category",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to="Category/"),
        ),
        migrations.AlterField(
            model_name="food",
            name="featured_image",
            field=models.ImageField(upload_to="Food/Featured-Image"),
        ),
        migrations.AlterField(
            model_name="gallery",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to="Gallery/"),
        ),
        migrations.AlterField(
            model_name="recipes",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to="Recipes/"),
        ),
    ]
