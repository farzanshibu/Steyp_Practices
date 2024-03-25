# Generated by Django 5.0.3 on 2024-03-15 09:26

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("web", "0005_blog_marketingfeature_product_testimonials_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="videoblogs",
            name="icon",
            field=models.FileField(upload_to="video-blog/icons", verbose_name="Icon"),
        ),
        migrations.AlterField(
            model_name="videoblogs",
            name="image",
            field=models.ImageField(upload_to="video-blog/", verbose_name="Image"),
        ),
    ]