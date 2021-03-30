from app.models import db, Video

def seed_songs():
    video1 = Video(
        title="Anderson .Paak & The Free Nationals: NPR Music Tiny Desk Concert",
        video_path="videos/andersonPaak_tinyDesk.mp4",
        thumbnail_path="https://i.ytimg.com/vi/ferZnZ0_rSM/maxresdefault.jpg",
        user_id=1,
        category_id=1
    )

    db.session.add(video1)
    db.session.commit()

