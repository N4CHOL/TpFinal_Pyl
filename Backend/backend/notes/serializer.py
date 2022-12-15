from rest_framework import serializers

#Models

from notes.models import Note

# Serializer

class NoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Note
        fields = '__all__'