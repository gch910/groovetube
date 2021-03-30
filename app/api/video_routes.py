from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Video

video_routes = Blueprint("videos", __name__)

@video_routes.route("/<int:video_id>")
def video(video_id):
    video = Video.query.get(video_id)

    return {"video": video.to_dict()}
