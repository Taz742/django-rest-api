from django.db import models
from django.utils import timezone


class TimeStampedModel(models.Model):
    created_date = models.DateTimeField(default=timezone.now)
    modified_date = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
