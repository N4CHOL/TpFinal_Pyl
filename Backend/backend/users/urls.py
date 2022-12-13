# Django imports
from django.urls import path


# Views imports
from users.views import (
    UserApiView,
    UserDetailApiView

    
)


# Urls
urlpatterns = [

    path('user-list/',UserApiView.as_view(), name='user'),
    path('user/<int:pk>/',UserDetailApiView.as_view(),name='user_detail_api_view')
]