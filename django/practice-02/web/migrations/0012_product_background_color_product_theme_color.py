# Generated by Django 5.0.3 on 2024-03-15 10:33

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("web", "0011_rename_testimonials_testimonial"),
    ]

    operations = [
        migrations.AddField(
            model_name="product",
            name="background_color",
            field=models.CharField(
                default="d0deff", max_length=50, verbose_name="Background Color"
            ),
        ),
        migrations.AddField(
            model_name="product",
            name="theme_color",
            field=models.CharField(
                default="0055fb", max_length=50, verbose_name="Theme Color"
            ),
        ),
    ]
