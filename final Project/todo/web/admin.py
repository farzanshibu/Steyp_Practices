from django.contrib import admin

from web.models import Todos


# Register your models here.
class TodoseAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "user", "isCompleted"]


admin.site.register(Todos, TodoseAdmin)
