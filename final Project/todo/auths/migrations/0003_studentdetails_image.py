# Generated by Django 5.0.3 on 2024-04-04 11:38

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("auths", "0002_alter_studentdetails_options"),
    ]

    operations = [
        migrations.AddField(
            model_name="studentdetails",
            name="image",
            field=models.ImageField(default="images/default.webp", upload_to="images/"),
        ),
    ]
