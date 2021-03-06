from .db import db
from .collection import user_collection
from .follows import follows

class Video(db.Model):

    __tablename__ = 'videos'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    artist = db.Column(db.String(255), nullable=False)
    video_path = db.Column(db.String(1000), nullable=False)
    img_path = db.Column(db.String(1000), default="https://www.clipartmax.com/png/middle/309-3096799_play-icon-video-play-button-youtube.png")
    gif_path = db.Column(db.String(1000), default="https://www.clipartmax.com/png/middle/309-3096799_play-icon-video-play-button-youtube.png")
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)

    category = db.relationship('Category')
    user = db.relationship('User', back_populates='videos')
    comments = db.relationship('Comment', back_populates='video')
    likes = db.relationship('Like')
    user_collection = db.relationship("User", secondary=user_collection, back_populates="video_collection")

    def to_dict(self):
        #temporary way to get comment to top - need to do this by time and change model
        if self.comments:
            self.comments.insert(0, self.comments.pop())
        return {
            "id": self.id,
            "title": self.title,
            "artist": self.artist,
            "video_path": self.video_path,
            "img_path": self.img_path,
            "gif_path": self.gif_path,
            "user_id": self.user_id,
            "category_id": self.category_id,
            "category_name": self.category.name,
            "comments": [comment.to_dict() for comment in self.comments],
        }



