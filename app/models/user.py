from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .collection import user_collection
from .follows import follows

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  profile_img = db.Column(db.String(1000), default="https://i.stack.imgur.com/l60Hf.png")
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
    lazy="dynamic"
  )
  following = db.relationship(
    "User",
    secondary=follows,
    primaryjoin=(follows.c.followed_id == id),
    secondaryjoin=(follows.c.follower_id == id),
    lazy="dynamic"
  )


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
      "comments": [comment.to_dict() for comment in self.comments],
      "video_collection": [video.to_dict() for video in self.video_collection],
      "followers": [user.to_simple() for user in self.followers],
      "following": [user.to_simple() for user in self.following],
      "profile_img": self.profile_img

    }

  def just_username(self):
    return {
      "id": self.id,
      "username": self.username,
      "profile_img": self.profile_img
    }
  
  def to_simple(self):
    return {
      "id": self.id,
      "username": self.username,
      "profile_img": self.profile_img
    }
    

