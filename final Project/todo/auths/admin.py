from django.contrib import admin

from auths.models import StudentDetails


# Register your models here.


class StudentDetailsAdmin(admin.ModelAdmin):
    list_display = ["id", "full_name", "student_class", "division"]


admin.site.register(StudentDetails, StudentDetailsAdmin)
