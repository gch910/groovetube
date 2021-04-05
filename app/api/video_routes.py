from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Video, User, Comment
from app.forms.comment_form import CommentForm
from app.forms.search_form import SearchForm

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

@video_routes.route("/user/<int:user_id>/uploads")
def uploaded_videos(user_id):
    videos = Video.query.filter_by(user_id=user_id)

    videosDict = {"videos": [video.to_dict() for video in videos]}

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
    comment = Comment(
            user_id=form.data["user_id"],
            video_id=id,
            content=form.data["content"])
    if form.validate_on_submit():
        db.session.add(comment)
        db.session.commit()
    return comment.to_dict()

@video_routes.route('/comment/<int:id>/delete', methods=["DELETE"])
def delete_video_comment(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()

    return comment.to_dict()


@video_routes.route('/search', methods=['POST'])
def video_search():
    form = SearchForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    user_search = form.data["search"]
    if form.validate_on_submit():
        videos = Video.query.filter(Video.title.ilike(f'%{user_search}%')).all()
    return {"videos": [video.to_dict() for video in videos]}
    
