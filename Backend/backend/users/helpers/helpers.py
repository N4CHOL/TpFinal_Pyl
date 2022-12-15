#Model imports
from users.models import User

def userExists(pk):
    try:
        user = User.objects.get(id=pk)
        return True, user
    except:
        return False