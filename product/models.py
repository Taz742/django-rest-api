from django.db import models
from versatileimagefield.fields import VersatileImageField, PPOIField


# Create your models here.
class Product(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, default='default_value')
    price = models.FloatField()
    image = models.ImageField()

    class Meta:
        ordering = ('created',)
