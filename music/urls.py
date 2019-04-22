from django.urls import path, re_path
from .views import MusicianListView, MusicianView, AlbumListView, AlbumView


urlpatterns = [
    path('musicians/', MusicianListView.as_view()),
    # re_path(r'^api/musicians/(?P<pk>\d+)/$', MusicianView.as_view()),
    # re_path(r'^api/albums/$', AlbumListView.as_view()),
    # re_path(r'^api/albums/(?P<pk>\d+)/$', AlbumView.as_view()),
]