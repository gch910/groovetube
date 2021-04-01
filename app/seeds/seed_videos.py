from app.models import db, Video
from .videos import all_videos

def seed_videos():
    for video in all_videos:
        db.session.add(video)
    db.session.commit()
