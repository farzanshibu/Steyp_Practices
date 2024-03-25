from django.contrib import admin
from .models import Gallery, Place, Category, Comment, Like


class CategoryAdmin(admin.ModelAdmin):
    list_display = ["name", "image"]


admin.site.register(Category, CategoryAdmin)


class GalleryInline(admin.TabularInline):
    model = Gallery


class PlaceAdmin(admin.ModelAdmin):
    inlines = [GalleryInline]
    list_display = ["name", "location", "description", "is_featured", "is_deleted"]


admin.site.register(Place, PlaceAdmin)

admin.site.register(Comment)
admin.site.register(Like)
