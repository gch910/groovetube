from .db import db

class Comment(db.Model):
    
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    video_id = db.Column(db.Integer, db.ForeignKey('videos.id'), nullable=False)
    content = db.Column(db.String(1000), nullable=False)

    user = db.relationship('User')
    video = db.relationship('Video')

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "video_id": self.video_id,
            "content": self.content,
            "user": self.user.just_username()
        }