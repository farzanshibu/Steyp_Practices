from django.contrib import admin
from .models import Category, Food, Gallery, Favorite, Recipes


class CategoryAdmin(admin.ModelAdmin):
    list_display = ["name", "image"]


admin.site.register(Category, CategoryAdmin)


class RecipesInline(admin.TabularInline):
    model = Recipes


class GalleryInline(admin.TabularInline):
    model = Gallery


class FoodAdmin(admin.ModelAdmin):
    inlines = [RecipesInline, GalleryInline]
    list_display = ["name", "description", "is_featured", "is_deleted"]


admin.site.register(Food, FoodAdmin)
admin.site.register(Favorite)
