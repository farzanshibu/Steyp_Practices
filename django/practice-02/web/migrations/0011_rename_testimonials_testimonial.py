# Generated by Django 5.0.3 on 2024-03-15 09:53

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("web", "0010_testimonials_designation"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Testimonials",
            new_name="Testimonial",
        ),
    ]