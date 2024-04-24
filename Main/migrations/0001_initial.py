# Generated by Django 5.0.1 on 2024-04-12 02:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=122)),
                ('qualification', models.CharField(max_length=122)),
                ('username', models.CharField(max_length=122)),
                ('specialisation', models.CharField(max_length=122)),
                ('phone', models.CharField(max_length=122)),
                ('address', models.CharField(max_length=122)),
                ('experience', models.CharField(max_length=122)),
                ('CustID', models.CharField(max_length=122)),
                ('password', models.CharField(max_length=122)),
            ],
        ),
    ]