from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
demo = User(username='Demo', email='demo@aa.io', password='password')
    
demo2 = User(username="Demo2", email='demo2@aa.io', password='password')

demo3 = User(username="Demo3", email='demo3@aa.io', password='password')

# user3 = User(username="User3", email='user3@aa.io', password='password')


def seed_users():
    db.session.add(demo)
    db.session.add(demo2)
    db.session.add(demo3)
    # db.session.add(user3)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
