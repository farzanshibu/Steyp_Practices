import json

from django.shortcuts import render
from django.http.response import HttpResponse
from django.views.decorators.csrf import csrf_exempt

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


# Create your views here.
def index(request):
    customers = Customer.objects.all()
    features = Feature.objects.all()
    video_blogs = VideoBlogs.objects.all()
    testimonials_featured = Testimonial.objects.filter(is_featured=True)
    testimonials = Testimonial.objects.all()
    products = Product.objects.all()
    marketing_features = MarketingFeature.objects.all()
    blogs = Blog.objects.all()
    context = {
        "customers": customers,
        "features": features,
        "video_blogs": video_blogs,
        "testimonials_featured": testimonials_featured,
        "testimonials": testimonials,
        "products": products,
        "marketing_features": marketing_features,
        "blogs": blogs,
    }
    return render(request, "index.html", context=context)


@csrf_exempt
def subscribe(request):
    email = request.POST.get("email")
    if not Subscriber.objects.filter(email=email).exists():
        Subscriber.objects.create(email=email)
        response_data = {
            "status": "success",
            "title": "Successfully Registered",
            "message": "You subscribed to our newsletter successfully",
        }
    else:
        response_data = {
            "status": "error",
            "title": "Already Registered",
            "message": "You already subscribed to our newsletter",
        }
    return HttpResponse(
        json.dumps(response_data), content_type="application/javascript"
    )
