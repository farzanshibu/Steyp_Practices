from django.db import models

BLOG_CONTENT_TYPE = (
    ("Blog Post", "blog"),
    ("Webinar", "webinar"),
    ("Report", "report"),
)


# Create your models here.
class Customer(models.Model):
    image = models.FileField(upload_to="customers/")


class Subscriber(models.Model):
    email = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.email


class Feature(models.Model):
    image = models.ImageField(
        upload_to="feature/",
        verbose_name="Image",
    )
    icon = models.FileField(
        upload_to="feature/icons",
        verbose_name="Icon",
    )
    icon_background = models.CharField(max_length=50, verbose_name="Icon Background")
    title = models.CharField(max_length=50)
    description = models.TextField()
    testinomial_description = models.TextField(verbose_name="Testimonail Description")
    testinomial_author = models.CharField(
        max_length=50, verbose_name="Description Author"
    )
    author_designation = models.CharField(
        max_length=50, verbose_name="Author Designation"
    )
    testinomial_icon = models.FileField(
        upload_to="feature/testimonials", verbose_name="Testimonail Icon"
    )

    def __str__(self):
        return self.title


class Blog(models.Model):
    image = models.ImageField(
        upload_to="blog/",
        verbose_name="Image",
    )
    title = models.CharField(max_length=250)
    content_type = models.CharField(
        max_length=50, verbose_name="Content Type", choices=BLOG_CONTENT_TYPE
    )

    def __str__(self):
        return self.title


class MarketingFeature(models.Model):
    image = models.FileField(
        upload_to="marketing-feature/",
        verbose_name="Image",
    )
    title = models.CharField(max_length=250)
    description = models.TextField()

    def __str__(self):
        return self.title


class Product(models.Model):
    image = models.ImageField(
        upload_to="product/",
        verbose_name="Image",
    )
    background_color = models.CharField(
        max_length=50, verbose_name="Background Color", default="d0deff"
    )
    theme_color = models.CharField(
        max_length=50, verbose_name="Theme Color", default="0055fb"
    )
    title = models.CharField(max_length=250)
    description = models.TextField()
    icon = models.FileField(
        upload_to="product/icons",
        verbose_name="Icon",
    )

    def __str__(self):
        return self.title


class Testimonial(models.Model):
    image = models.ImageField(
        upload_to="testimonial/",
        verbose_name="Image",
    )
    icon = models.FileField(
        upload_to="testimonial/icons", verbose_name="Icon", blank=True, null=True
    )
    description = models.TextField()
    name = models.CharField(max_length=250)
    company_name = models.CharField(max_length=50, verbose_name="Company Name")
    designation = models.CharField(max_length=250, verbose_name="Designation")
    is_featured = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class VideoBlogs(models.Model):
    image = models.ImageField(
        upload_to="video-blog/",
        verbose_name="Image",
    )
    title = models.CharField(max_length=250)
    icon = models.FileField(
        upload_to="video-blog/icons",
        verbose_name="Icon",
    )

    def __str__(self):
        return self.title
