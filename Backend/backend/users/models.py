from django.db import models


class User(models.Model):
  
   

    username = models.CharField(
        max_length=500,
        unique=True,
        verbose_name='username'
        
    )

    #   Atributos
    password = models.CharField(
        max_length=500,
        unique=False,
        verbose_name='password'
    )

    email = models.CharField(
        max_length=500,
        unique=True,
        verbose_name='email'
    )

    name = models.CharField(
        max_length=500,
        unique=False,
        verbose_name='name',
        default=None
        
    )

    surname = models.CharField(
        max_length=500,
        unique=False,
        verbose_name='surname',
        default=None
    )