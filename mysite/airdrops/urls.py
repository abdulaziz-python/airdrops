from django.urls import path
from . import views

app_name = 'airdrops'

urlpatterns = [
    path('', views.home, name='home'),
    path('add-star/<int:airdrop_id>/', views.add_star, name='add_star'),
]