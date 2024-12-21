from django.urls import path
from . import views

urlpatterns = [
    path('getJobs/', views.get_jobs),
    path('createJob/', views.create_job)
]