from django.contrib import admin
from .models import Airdrop

@admin.register(Airdrop)
class AirdropAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_verified', 'stars', 'created_at')
    list_filter = ('is_verified', 'created_at')
    search_fields = ('name', 'description')
    ordering = ('-created_at',)