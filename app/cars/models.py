from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinLengthValidator

from app.models import TimeStampedModel


User = get_user_model()


class CarsCategory(models.Model):
    name = models.CharField(max_length=255, blank=False, unique=True)
    
    def __str__(self):
        return self.name


class Car(TimeStampedModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=False, related_name="cars")
    category = models.ForeignKey(CarsCategory, on_delete=models.CASCADE, blank=False, related_name="car")
    title = models.CharField(max_length=255, validators=[MinLengthValidator(1)], default="")
    heating = models.BooleanField(default=False)
    microphone = models.BooleanField(default=False)
    additional_boot = models.BooleanField(default=False)
    bicycle_clip = models.BooleanField(default=False)
    air_conditioner = models.BooleanField(default=False)
    mini_bar = models.BooleanField(default=False)
    child_seat = models.BooleanField(default=False)
    smoking = models.BooleanField(default=False)
    wifi = models.BooleanField(default=False)
    refrigerator = models.BooleanField(default=False)
    ski_clip = models.BooleanField(default=False)
    navigation = models.BooleanField(default=False)
    description_en = models.TextField(validators=[MinLengthValidator(1)], default="")
    description_ge = models.TextField(validators=[MinLengthValidator(1)], default="")

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_date']
