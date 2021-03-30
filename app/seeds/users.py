from werkzeug.security import generate_password_hash
from app.models import db, User, Video, Category

# Adds a demo user, you can add other users here if you want


def seed_users():
    category1 = Category(name='Rap')  
    category2 = Category(name='Rock')  
    category3 = Category(name='R&B')  
    category4 = Category(name='Pop')  
    category5 = Category(name='Jazz')  
    category6 = Category(name='Electronic')  

    demo = User(username='Demo', email='demo@aa.io',
                password='password')

    video1 = Video(
        title="Anderson .Paak & The Free Nationals: NPR Music Tiny Desk Concert",
        video_path="videos/andersonPaak_tinyDesk.mp4",
        thumbnail_path="https://i.ytimg.com/vi/ferZnZ0_rSM/maxresdefault.jpg",
        user=demo,
        category=category1
    )

    db.session.add(category2)
    db.session.add(category3)
    db.session.add(category4)
    db.session.add(category5)
    db.session.add(category6)


    db.session.add(video1)

   
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
