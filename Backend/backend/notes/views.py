# rest Imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
#   Model Imports
from notes.models import Note

#   Serializers imports
from notes.serializer import NoteSerializer

# Create your views here.

#   Helper Imports
from notes.helpers.noteErrors import noteExists
from users.models import User



  


class NoteUser(APIView):

    def get(self, request,pk):
        
        user = Note.objects.get(pk= self.request.GET.get("user_id"))
        #user = get_object_or_404(Note, pk = user)
        notes = Note.objects.filter(user=user)
        note_serializer = NoteSerializer(notes, many=True)
        return Response(
            data=note_serializer.data,
            status=status.HTTP_200_OK
        )


class NoteApiView(APIView):

    def get(self, request):
        """ Retorna un listado con todos los heroes almacenados en la base """
        print(F'REQUEST --> {request.method}')

        notes = Note.objects.all()
        note_serializer = NoteSerializer(notes, many=True)

        return Response(
            data=note_serializer.data,
            status=status.HTTP_200_OK
        )


def post(self, request):
    """Crea una nueva nota"""
    print("ESTAMOS EN EL POST")

    serializer = NoteSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

        data = {
            'message': 'Note Created Successfully'
        }

        return Response(
            data=data,
            status=status.HTTP_201_CREATED
        )
    return Response(
        data=serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )


class CreateNoteApiView(APIView):
    def post(self, request):

        serializer = NoteSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            data = {
                'message': 'Heroe Created Successfully'
            }

            return Response(
                data=data,
                status=status.HTTP_201_CREATED
            )
        return Response(
            data=serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


class NoteDetailApiView(APIView):

    def get(self, request, pk):
        "devuelve informacion de una nota"
        try:
            notes = Note.objects.get(pk=pk)

            note_serializer = NoteSerializer(notes)
            return Response(
                data=note_serializer.data,
                status=status.HTTP_200_OK
            )
        except:
            data = {
                'message': 'Coulnt access note data'
            }
        return Response(
            data=data,
            status=status.HTTP_400_BAD_REQUEST
        )

    def put(self, request, pk):
        "modificar nota"
        validacion, notes = noteExists(pk)

        if validacion:

            note_serializer = NoteSerializer(notes, data=request.data)
            if note_serializer.is_valid():
                note_serializer.save()

                data = {
                    'message': 'Heroe Edited Successfully'
                }

                return Response(
                    data=data,
                    status=status.HTTP_200_OK
                )
        return Response(
            data=note_serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    def delete(self, request, pk):
        "elimina un registro"
        notes = Note.objects.get(id=pk)
        notes.delete()

        data = {
            'message': 'Heroe Deleted Successfully'
        }
        return Response(
            data=data,
            status=status.HTTP_200_OK
        )
