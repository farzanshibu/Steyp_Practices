# Generated by Django 5.0.3 on 2024-03-18 15:08

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("web", "0006_remove_comment_reply_to_comment_reply_to"),
    ]

    operations = [
        migrations.AlterField(
            model_name="comment",
            name="reply_to",
            field=models.ManyToManyField(blank=True, to="web.comment"),
        ),
    ]
