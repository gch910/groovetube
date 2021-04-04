from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Video, User, Comment
from app.forms.comment_form import CommentForm

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



@video_routes.route('/<int:id>/comment', methods=['POST'])
def video_comment(id):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment = Comment(
            user_id=form.data["user_id"],
            video_id=id,
            content=form.data["content"])
        db.session.add(comment)
        db.session.commit()
    return comment.to_dict()
