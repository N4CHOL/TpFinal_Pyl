#   Django imports
from django.urls import path    

#   Views 
from notes.views import (NoteApiView,CreateNoteApiView,NoteDetailApiView, NoteUser)

#   Urls

urlpatterns = [
    path('note-list',NoteApiView.as_view(), name='note_list'),
    path('create-note/',CreateNoteApiView.as_view(), name='create'),
    path('detail-note/<int:pk>',NoteDetailApiView.as_view(), name='detail'),
    path('consult-note/<int:pk>',NoteUser.as_view(), name='notes'),
    
]