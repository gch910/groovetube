from .db import db

class Video(db.Model):

    __tablename__ = 'videos'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    video_path = db.Column(db.String(1000), nullable=False)
    thumbnail_path = db.Column(db.String(1000), default="https://www.clipartmax.com/png/middle/309-3096799_play-icon-video-play-button-youtube.png")
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)

    category = db.relationship('Category')
    user = db.relationship('User', back_populates='videos')
    comments = db.relationship('Comment', back_populates='video')
    likes = db.relationship('Like')
    # liked_by = db.relationship('User', secondary='Like')

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "video_path": self.video_path,
            "thumbnail_path": self.thumbnail_path,
            "user_id": self.user_id,
            "category_id": self.category_id,
            # "user": self.user,
            # "comments": self.comments,
            # "likes": self.likes
        }



