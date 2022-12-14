# Generated by Django 4.1.2 on 2022-12-14 20:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0002_remove_user_image"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="user",
            options={},
        ),
        migrations.RemoveField(
            model_name="user",
            name="groups",
        ),
        migrations.RemoveField(
            model_name="user",
            name="is_active",
        ),
        migrations.RemoveField(
            model_name="user",
            name="is_superuser",
        ),
        migrations.RemoveField(
            model_name="user",
            name="last_login",
        ),
        migrations.RemoveField(
            model_name="user",
            name="last_name",
        ),
        migrations.RemoveField(
            model_name="user",
            name="user_permissions",
        ),
        migrations.AddField(
            model_name="user",
            name="surname",
            field=models.CharField(
                default=None, max_length=500, verbose_name="surname"
            ),
        ),
        migrations.AlterField(
            model_name="user",
            name="email",
            field=models.CharField(max_length=500, unique=True, verbose_name="email"),
        ),
        migrations.AlterField(
            model_name="user",
            name="name",
            field=models.CharField(default=None, max_length=500, verbose_name="name"),
        ),
        migrations.AlterField(
            model_name="user",
            name="password",
            field=models.CharField(max_length=500, verbose_name="password"),
        ),
        migrations.AlterField(
            model_name="user",
            name="username",
            field=models.CharField(
                max_length=500, unique=True, verbose_name="username"
            ),
        ),
    ]
