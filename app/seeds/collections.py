from .users import demo1, demo2
from .videos import user1_collection, user2_collection
from app.models import db, Video, User


def seed_collection():
    for i in range(len(user1_collection)):
        user1 = demo1
        user1.video_collection.append(user1_collection[i])
        db.session.add(user1)
    for i in range(len(user2_collection)):
        user2 = demo2
        user2.video_collection.append(user2_collection[i])
        db.session.add(user2)
    
    db.session.commit()
        