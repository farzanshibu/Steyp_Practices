import django.contrib.auth.models
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from auths.models import StudentDetails
from web.models import Todos
from django.contrib.auth.decorators import login_required


@login_required(login_url="/auth/login/")
def TodoHomeView(request):
    user = request.user
    User = StudentDetails.objects.get(user=request.user)

    # If the user is staff, show all todos, otherwise only show todos of the current user
    if user.is_staff:
        all_todos = Todos.objects.all().order_by("isCompleted", "-created_at")

    else:
        all_todos = Todos.objects.filter(user=User).order_by("isCompleted")

    context = {
        "all_todos": all_todos,
        "User": User,
    }
    return render(request, "todo/home.html", context)


@login_required(login_url="/auth/login/")
def AddTodo(request):
    if request.method == "POST":
        task = request.POST.get("task")
        if task:
            # Create and save the new todo
            User = StudentDetails.objects.get(user=request.user)
            Todos.objects.create(title=task, user=User)
    return HttpResponseRedirect("/")


@login_required(login_url="/auth/login/")
def DeleteTodo(request, id):
    try:
        # Delete the todo with the given id
        todo = Todos.objects.get(id=id)
        User = StudentDetails.objects.get(user=request.user)
        if todo is None:
            return HttpResponse("This todo does not exist")
        if todo.isDeleted:
            return HttpResponse("This todo is already deleted")
        if todo.user != User and not request.user.is_staff:
            return HttpResponse("You don't have permission to delete this todo")

        todo.isDeleted = True
        todo.save()
    except Todos.DoesNotExist:
        pass  # Handle the case where the todo does not exist
    return HttpResponseRedirect("/")


@login_required(login_url="/auth/login/")
def UpdateTodo(request, id):
    todo = Todos.objects.get(id=id)
    User = StudentDetails.objects.get(user=request.user)
    if todo is None:
        return HttpResponse("This todo does not exist")
    if todo.isDeleted:
        return HttpResponse("This todo is deleted")
    if todo.user != User and not request.user.is_staff:
        return HttpResponse("You don't have permission to complete this todo")
    if request.method == "POST":
        new_title = request.POST.get("task")

        if new_title:
            # Update the title of the todo
            todo.title = new_title
            todo.save()
    else:
        context = {
            "updateTodo": todo,
            "User": User,
        }
        return render(request, "todo/home.html", context)

    return HttpResponseRedirect("/")


@login_required(login_url="/auth/login/")
def CompleteTodo(request, id):
    todo = Todos.objects.get(id=id)
    User = StudentDetails.objects.get(user=request.user)
    if todo is None:
        return HttpResponse("This todo does not exist")
    if todo.isDeleted:
        return HttpResponse("This todo is deleted")
    if todo.user != User and not request.user.is_staff:
        return HttpResponse("You don't have permission to complete this todo")

    todo.isCompleted = not todo.isCompleted
    todo.save()
    return HttpResponseRedirect("/")
