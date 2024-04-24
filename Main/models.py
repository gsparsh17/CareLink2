from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Contact(models.Model):
    name=models.CharField(max_length=122)
    specialization=models.CharField(max_length=122)
    username=models.CharField(max_length=122)
    qualification=models.CharField(max_length=122)
    phone=models.CharField(max_length=122)
    address=models.CharField(max_length=122)
    experience=models.CharField(max_length=122)
    CustID=models.CharField(max_length=122)
    password=models.CharField(max_length=122)
    
    def __str__(self):
        return self.name

# Create your models here.
