from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Video, User

video_routes = Blueprint("videos", __name__)

@video_routes.route("/")
def all_videos():
    videos = Video.query.all()

    videosDict = {"videos": [video.to_dict() for video in videos]}
    return videosDict

@video_routes.route("/user/<int:user_id>")
def user_videos(user_id):
    user = User.query.get(user_id)

    videosDict = {"videos": user.to_dict()["video_collection"]}
    return videosDict

@video_routes.route("/<int:video_id>")
def video(video_id):
    video = Video.query.get(video_id)
    videoDict = video.to_dict()
    user_id = videoDict["user_id"]
    user = User.query.get(user_id)
    videoDict["user"] = user.to_dict()

    return {"video": videoDict}
