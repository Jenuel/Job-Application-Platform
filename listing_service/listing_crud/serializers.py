from rest_framework import serializers
from .models import Job

class JobSerializer(serializers.Model):
    class Meta:
        model = Job
        fields = '__all__'
