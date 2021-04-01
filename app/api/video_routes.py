from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Video

video_routes = Blueprint("videos", __name__)

@video_routes.route("/user/<int:user_id>")
def user_videos(user_id):
    videos = Video.query.filter_by(user_id=user_id)

    videosDict = {"videos": [video.to_dict() for video in videos]}
    return videosDict

@video_routes.route("/<int:video_id>")
def video(video_id):
    video = Video.query.get(video_id)

    return {"video": video.to_dict()}
