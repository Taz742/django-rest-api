# Generated by Django 2.2 on 2019-04-20 13:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='album',
            name='release_date',
            field=models.DateField(auto_now_add=True),
        ),
    ]
