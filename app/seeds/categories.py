from app.models import db, Category

def seed_categories():
    category1 = Category(name='Rap')  
    category2 = Category(name='Rock')  
    category3 = Category(name='R&B')  
    category4 = Category(name='Pop')  
    category5 = Category(name='alternative')  
    category6 = Category(name='Electronic') 
    category7 = Category(name='Soul') 
    category8 = Category(name='Jazz') 

    db.session.add(category1)
    db.session.add(category2)
    db.session.add(category3)
    db.session.add(category4)
    db.session.add(category5)
    db.session.add(category6)
    db.session.add(category7)
    db.session.add(category8)

    db.session.commit()