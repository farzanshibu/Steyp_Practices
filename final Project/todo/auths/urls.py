from django.urls import path
from auths import views

app_name = "auths"

urlpatterns = [
    path("login/", views.LoginView, name="login"),
    path("logout/", views.LogoutView, name="logout"),
    path("signup/", views.SignupView, name="signup"),
]
