from django.db import models

# Create your models here.
class Job(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    rating = models.CharField(max_length=10)
    wage = models.IntegerField()
    status = models.CharField(max_length=20, default='Pending') #for the vendor and checking of availability
    acc_id = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

#not yet migrated