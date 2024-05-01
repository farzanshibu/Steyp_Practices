from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth import logout, authenticate, login
from django.contrib.auth.models import User

from auths.forms import PrettyAuthenticationForm, PrettyUserCreationForm


def LoginView(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect("/")
    if request.method == "POST":
        form = PrettyAuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data["username"]
            password = form.cleaned_data["password"]
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return HttpResponseRedirect("/")
    else:
        form = PrettyAuthenticationForm()
    context = {"form": form}
    return render(request, "auth/login.html", context)


@login_required(login_url="/auth/login/")
def LogoutView(request):
    logout(request)
    return HttpResponseRedirect("/auth/login/")


def SignupView(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect("/")
    if request.method == "POST":
        form = PrettyUserCreationForm(request.POST, request.FILES)
        # If form is valid, create user
        if form.is_valid():
            user = form.save()

            # Authenticate user
            login(request, user)
            return HttpResponseRedirect("/")
    else:
        form = PrettyUserCreationForm()
    context = {"form": form}
    return render(request, "auth/signup.html", context)
