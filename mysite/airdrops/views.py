from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from .models import Airdrop

def home(request):
    trusted_airdrops = Airdrop.objects.filter(is_verified=True).order_by('-stars')[:5]
    recent_airdrops = Airdrop.objects.all().order_by('-created_at')[:10]
    top_rated_airdrops = Airdrop.objects.all().order_by('-stars')
    
    context = {
        'trusted_airdrops': trusted_airdrops,
        'recent_airdrops': recent_airdrops,
        'top_rated_airdrops': top_rated_airdrops,
    }
    return render(request, 'airdrops/home.html', context)

@require_POST
def add_star(request, airdrop_id):
    airdrop = get_object_or_404(Airdrop, id=airdrop_id)
    airdrop.stars += 1
    airdrop.save()
    return JsonResponse({'stars': airdrop.stars})