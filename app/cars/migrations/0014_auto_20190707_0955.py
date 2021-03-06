# Generated by Django 2.2.2 on 2019-07-07 09:55

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0013_auto_20190707_0946'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='carscategories',
            name='name',
        ),
        migrations.RemoveField(
            model_name='carsmanufacturers',
            name='name',
        ),
        migrations.AddField(
            model_name='carscategories',
            name='name_en',
            field=models.CharField(default='', max_length=255, unique=True, validators=[django.core.validators.MinLengthValidator(1)]),
        ),
        migrations.AddField(
            model_name='carscategories',
            name='name_ge',
            field=models.CharField(default='', max_length=255, unique=True, validators=[django.core.validators.MinLengthValidator(1)]),
        ),
        migrations.AddField(
            model_name='carsmanufacturers',
            name='name_en',
            field=models.CharField(default='', max_length=255, unique=True, validators=[django.core.validators.MinLengthValidator(1)]),
        ),
        migrations.AddField(
            model_name='carsmanufacturers',
            name='name_ge',
            field=models.CharField(default='', max_length=255, unique=True, validators=[django.core.validators.MinLengthValidator(1)]),
        ),
        migrations.AlterField(
            model_name='caradditionalinformation',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='car', to='cars.CarsCategories'),
        ),
        migrations.AlterField(
            model_name='caradditionalinformation',
            name='manufacturer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='car', to='cars.CarsManufacturers'),
        ),
    ]
