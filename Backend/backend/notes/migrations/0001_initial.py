# Generated by Django 4.1.4 on 2022-12-08 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Note",
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
                (
                    "title",
                    models.CharField(
                        max_length=250, unique=True, verbose_name="titulo"
                    ),
                ),
                (
                    "description",
                    models.CharField(max_length=500, verbose_name="descripcion"),
                ),
                ("CREATION_DATE", models.DateField()),
                ("CLOSING_DATE", models.DateField()),
            ],
        ),
    ]
