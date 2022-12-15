#Model imports
from notes.models import Note

def noteExists(pk):
    try:
        notes = Note.objects.get(id=pk)
        return True, notes
    except:
        return False