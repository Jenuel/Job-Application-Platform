from django.urls import path
from . import views

urlpatterns = [
    path('getJobs/', views.create_job)
]