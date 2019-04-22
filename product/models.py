from django.db import models


# Create your models here.
class ProductModel(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, default='default_value')
    price = models.FloatField()

    class Meta:
        ordering = ('created',)


class ProductDetailModel(models.Model):
    description = models.CharField(max_length=100, default='default_value')
    product = models.OneToOneField(ProductModel, related_name='detail', on_delete=models.CASCADE)


class FakeDetailChild(models.Model):
    fake_field = models.CharField(max_length=100, default='default_value')
    product_detail = models.OneToOneField(ProductDetailModel, related_name='fake_child', on_delete=models.CASCADE)
