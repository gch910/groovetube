from .users import demo, user1, user2
from .videos import user1_collection, user2_collection, user3_collection
from app.models import db, Video, User


def seed_collection():
    for i in range(len(user1_collection)):
        user1 = demo
        user1.video_collection.append(user1_collection[i])
        db.session.add(user1)
    for i in range(len(user2_collection)):
        user2 = user1
        user2.video_collection.append(user2_collection[i])
        db.session.add(user2)
    for i in range(len(user3_collection)):
        user3 = user2
        user2.video_collection.append(user3_collection[i])
        db.session.add(user3)
    
    db.session.commit()
        