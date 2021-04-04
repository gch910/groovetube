from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .collection import user_collection
from .follows import follows



# follows = db.Table('follows',
#     db.Column('follow_a_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
#     db.Column('follow_b_id', db.Integer, db.ForeignKey('users.id'), primary_key=True)
# )

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)

  videos = db.relationship('Video', back_populates='user')
  comments = db.relationship('Comment', back_populates='user')
  likes = db.relationship('Like')
  video_collection = db.relationship("Video", secondary=user_collection, back_populates="user_collection")
  followers = db.relationship(
    "User",
    secondary=follows,
    primaryjoin=(follows.c.follower_id == id),
    secondaryjoin=(follows.c.followed_id == id),
    backref=db.backref("follows", lazy="dynamic"),
    lazy="dynamic"
  )
  # liked_videos = db.relationship('Video', backref=db.backref("videos"), secondary='Like')

  # friends = db.relationship(
  #   'User', secondary=follows,
  #   primaryjoin = (id==follows.c.follow_a_id),
  #   secondaryjoin= (id==follows.c.follow_b_id)
  # )


  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      # "videos": [video.to_dict() for video in self.videos],
      "comments": [comment.to_dict() for comment in self.comments],
      "video_collection": [video.to_dict() for video in self.video_collection]
    }

  def just_username(self):
    return {
      "username": self.username
    }
