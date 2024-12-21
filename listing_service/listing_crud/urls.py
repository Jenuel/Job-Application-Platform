from django.urls import path
from . import views

urlpatterns = [
    path('getJobs/', views.get_jobs),
    path('getJobDetails/<str:id>/', views.get_job_details),
    path('createJob/', views.create_job),
    path('editJob/<str:id>/', views.edit_job),
]