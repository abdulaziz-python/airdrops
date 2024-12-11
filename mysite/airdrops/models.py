from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Airdrop(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to='airdrops/')
    link = models.URLField()
    description = models.TextField()
    is_verified = models.BooleanField(default=False)
    stars = models.IntegerField(default=0, validators=[MinValueValidator(0)])
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.name