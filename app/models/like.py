from .db import db

class Like(db.Model):
    user_id = db.Column(db.ForeignKey('users.id'), primary_key=True),
    video_id = db.Column(db.ForeignKey('videos.id'), primary_key=True),
    liked = db.Column('liked', db.Boolean, nullable=False)

    video = db.relationship('Video')
    user = db.relationship('User')

    def to_dict(self):
        return {
            "user_id": self.user_id,
            "video_id": self.video_id,
            "liked": self.liked
        }
