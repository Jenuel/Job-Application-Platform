from django.db import models

# Create your models here.
class Job(models.Model):
    title = models.CharField(max)
    description = models.TextField()
    status = models.CharField(max_length=20, default='Pending')
    acc_id = models.IntegerField()
