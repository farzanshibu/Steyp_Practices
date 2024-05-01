# Generated by Django 5.0.3 on 2024-04-10 21:21

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("web", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="category",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to="category/"),
        ),
        migrations.AlterField(
            model_name="gallery",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to="gallery/"),
        ),
        migrations.CreateModel(
            name="Recipes",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=50)),
                (
                    "image",
                    models.ImageField(blank=True, null=True, upload_to="Resipes/"),
                ),
                (
                    "food",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="web.food"
                    ),
                ),
            ],
        ),
    ]
