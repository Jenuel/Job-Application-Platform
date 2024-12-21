from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .serializers import JobSerializer
from .models import Job

# Create your views here.
def get_jobs(request):
    jobs =  Job.objects.all()
    serializer = JobSerializer(jobs, many=True)
    return Response(serializer.data, status=200)
  

