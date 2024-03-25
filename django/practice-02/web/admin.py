from django.contrib import admin
from web.models import (
    Subscriber,
    Customer,
    Feature,
    Blog,
    MarketingFeature,
    Product,
    Testimonial,
    VideoBlogs,
)

# Register your models here.


class CustomersAdmin(admin.ModelAdmin):
    list_display = ["id", "image"]


admin.site.register(Customer, CustomersAdmin)


admin.site.register(Subscriber)


class FeatureAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "testinomial_author", "author_designation"]


admin.site.register(Feature, FeatureAdmin)


class BlogAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "content_type"]


admin.site.register(Blog, BlogAdmin)


class MarketingFeatureAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "description"]


admin.site.register(MarketingFeature, MarketingFeatureAdmin)


class ProductAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "description"]


admin.site.register(Product, ProductAdmin)


class TestimonialAdmin(admin.ModelAdmin):
    list_display = [
        "id",
        "name",
        "company_name",
        "is_featured",
    ]


admin.site.register(Testimonial, TestimonialAdmin)


class VideoBlogsAdmin(admin.ModelAdmin):
    list_display = ["id", "title"]


admin.site.register(VideoBlogs, VideoBlogsAdmin)
