from django.urls import path
from . import views

urlpatterns = [
    path('getJobs/', views.get_jobs),
    path('getJobDetails/', views.get_job_details),
    path('createJob/', views.create_job)
]