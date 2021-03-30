from app.models import db, Category

def seed_categories():
    genre1 = Genre(name='Rap')  
    genre2 = Genre(name='Rock')  
    genre3 = Genre(name='R&B')  
    genre4 = Genre(name='Pop')  
    genre5 = Genre(name='Jazz')  
    genre6 = Genre(name='Electronic')  

    db.session.add(genre1)
    db.session.add(genre2)
    db.session.add(genre3)
    db.session.add(genre4)
    db.session.add(genre5)
    db.session.add(genre6)
    db.session.commit()
