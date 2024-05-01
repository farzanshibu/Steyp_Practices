from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User

from auths.models import StudentDetails


class PrettyAuthenticationForm(AuthenticationForm):
    username = forms.CharField(
        widget=forms.TextInput(attrs={"class": "form-control form-control-lg"})
    )
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={"class": "form-control form-control-lg"})
    )

    class Meta:
        fields = ["username", "password"]


class PrettyUserCreationForm(UserCreationForm):
    full_name = forms.CharField(
        widget=forms.TextInput(attrs={"class": "form-control form-control-lg"}),
        max_length=32,
        help_text="Full name",
    )

    student_class = forms.CharField(
        widget=forms.NumberInput(attrs={"class": "form-control form-control-lg"}),
        max_length=3,
        help_text="Class",
    )
    division = forms.CharField(
        widget=forms.TextInput(attrs={"class": "form-control form-control-lg"}),
        max_length=1,
        help_text="Division",
    )
    image = forms.ImageField(
        widget=forms.FileInput(attrs={"class": "form-control form-control-lg"}),
        help_text="Profile Picture",
        required=False,
    )
    username = forms.EmailField(
        widget=forms.EmailInput(attrs={"class": "form-control form-control-lg"}),
        max_length=64,
        help_text="Email address",
    )
    password1 = forms.CharField(
        widget=forms.PasswordInput(attrs={"class": "form-control form-control-lg"}),
        help_text="Password",
    )
    password2 = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                "class": "form-control form-control-lg",
            }
        ),
        help_text="Password Again",
    )

    class Meta(UserCreationForm.Meta):
        model = User
        fields = UserCreationForm.Meta.fields + (
            "full_name",
            "student_class",
            "division",
            "image",
        )

    def clean_division(self):
        division = self.cleaned_data.get("division")
        if not division.isalpha():
            raise forms.ValidationError("Enter a valid division")
        return division

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password1")
        confirm_password = cleaned_data.get("password2")

        if password and confirm_password and password != confirm_password:
            self.add_error("confirm_password", "Passwords do not match")

        username = cleaned_data.get("username")
        if User.objects.filter(username=username).exists():
            self.add_error("username", "Username already exists")

        return cleaned_data

    def save(self, commit=True):
        user = super().save(commit=False)
        if commit:
            user = User.objects.create_user(
                username=self.cleaned_data["username"],
                password=self.cleaned_data["password2"],
            )
            if self.cleaned_data["image"]:
                StudentDetails.objects.create(
                    user=user,
                    full_name=self.cleaned_data["full_name"],
                    student_class=self.cleaned_data["student_class"],
                    division=self.cleaned_data["division"],
                    image=self.cleaned_data["image"],
                )
            else:
                StudentDetails.objects.create(
                    user=user,
                    full_name=self.cleaned_data["full_name"],
                    student_class=self.cleaned_data["student_class"],
                    division=self.cleaned_data["division"],
                )
        return user
