# Rest imports
from rest_framework import serializers

# Models imports
from users.models import User


# Serializers
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
