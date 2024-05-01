from django.urls import path
from . import views

app_name = "web"
urlpatterns = [
    path("", views.TodoHomeView, name="todos"),
    path("add/", views.AddTodo, name="add-todos"),
    path("delete/<int:id>/", views.DeleteTodo, name="delete-todos"),
    path("update/<int:id>/", views.UpdateTodo, name="update-todos"),
    path("complete/<int:id>/", views.CompleteTodo, name="complete-todos"),
]
