# Rest imports
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

# Serializers imports
from users.serializers import (
    UserSerializer,

)

# Helper Imports
from users.helpers.helpers import userExists
# Models imports
from users.models import User


# Views

class UserApiView(APIView):

    """
    Listar y crear usuarios.
    """

    # List
    def get(self, request):

        users = User.objects.all()
        users_serializer = UserSerializer(users, many=True)

        return Response(data=users_serializer.data, status=status.HTTP_200_OK)

    # Create
    def post(self, request):
        user_serializer = UserSerializer(data=request.data)
        # Validación
        if user_serializer.is_valid():

            # User
            user_serializer.save()

            

            return Response(data=user_serializer.data, status=status.HTTP_201_CREATED)

        return Response(user_serializer.errors)


class UserDetailApiView(APIView):
    """
    Detallar, actualizar y eliminar un usuario.
    """

    # Validacion

    # Detail
    def get(self, request, pk):
        try:
            user = User.objects.get(id=pk)
            user_serializer = UserSerializer(user)
            return Response(user_serializer.data)
        except:
            data = {
                'message': 'Coldnt access user data'
            }
        return Response(
            data=data,
            status=status.HTTP_400_BAD_REQUEST
        )

    # Update

    def put(self, request, pk):
        validacion, user = userExists(pk)

        user_serializer = UserSerializer(user, data=request.data)

        if user_serializer.is_valid():
            user_serializer.save()

            return Response(data=user_serializer.data)

        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Delete
    def delete(self, request, pk):
        user = User.objects.get(id=pk)
        user.delete()

        return Response(
            {'message': 'Usuario eliminado correctamente'},
            status=status.HTTP_200_OK
        )
