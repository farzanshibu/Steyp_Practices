# Generated by Django 5.0.3 on 2024-04-04 08:55

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("web", "0002_rename_completed_todos_iscompleted_todos_isdeleted"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="todos",
            options={"verbose_name_plural": "TODOs"},
        ),
    ]