from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .serializers import JobSerializer
from .models import Job

# Create your views here.
@api_view(['GET'])
def get_jobs(request):
    jobs =  Job.objects.all()
    serializer = JobSerializer(jobs, many=True)
    return Response(serializer.data, status=200)

@api_view(['GET'])
def get_job_details(request, job_id):
    try:
        job = Job.objects.get(id=job_id)
        serializer = JobSerializer(job)
        return Response(serializer.data, status=200)
    except Job.DoesNotExist:
        return Response({"error": "Job not found"}, status=404)

@api_view(['POST'])
def create_job(request):
    serializer = JobSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=401)





