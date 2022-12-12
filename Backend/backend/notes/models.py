from django.db import models
from django.utils.timezone import now
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
        max_length = 14000,
        unique = False,
        verbose_name = 'descripcion'
    )

    state = models.CharField(
        max_length = 500,
        unique = False,
        verbose_name = 'state'
    )

    CREATION_DATE = models.DateTimeField(default=now, editable=False)
    CLOSING_DATE = models.DateField()

   