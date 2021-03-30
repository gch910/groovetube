from .db import db

class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.ForeignKey('users.id'), primary_key=True)
    video_id = db.Column(db.ForeignKey('videos.id'), primary_key=True)
    liked = db.Column(db.Boolean, nullable=False)

    video = db.relationship('Video')
    user = db.relationship('User')

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "video_id": self.video_id,
            "liked": self.liked
        }
