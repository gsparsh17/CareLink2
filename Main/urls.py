from django.contrib import admin
from django.urls import path
from Main import views

urlpatterns = [
    path("", views.index, name='index'),
    path("profile", views.profile, name='profile'),
    path("login1", views.login1, name='login1'),
    path("signup", views.signup, name='signup'),
    path("panel", views.panel, name='panel'),
    path("disease", views.disease, name='disease'),
    path("disease1", views.disease1, name='disease1'),
]