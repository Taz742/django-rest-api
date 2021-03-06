# Generated by Django 2.2 on 2019-07-19 07:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0017_auto_20190719_0652'),
    ]

    operations = [
        migrations.AlterField(
            model_name='car',
            name='additional_information',
            field=models.OneToOneField(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='car', to='cars.AdditionalInformation'),
        ),
        migrations.AlterField(
            model_name='car',
            name='has',
            field=models.OneToOneField(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='car', to='cars.Has'),
        ),
    ]
