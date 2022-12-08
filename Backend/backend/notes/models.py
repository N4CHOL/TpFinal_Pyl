from django.db import models

# Create your models here.


from django.db import models

# Create your models here.
class Note(models.Model):
    #   Opciones
    title = models.CharField(
        max_length = 250,
        unique = True,
        verbose_name = 'titulo'
    )

    #   Atributos
    description = models.CharField(
        max_length = 500,
        unique = False,
        verbose_name = 'descripcion'
    )

    # CREATION_DATE = models.DateField()
    # CLOSING_DATE = models.DateField()

   