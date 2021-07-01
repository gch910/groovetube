from flask import Blueprint, jsonify, request
from flask_login import current_user
from app.models import db, Video, User, Comment, Category
from app.forms.comment_form import CommentForm
from app.forms.search_form import SearchForm
from app.forms.video_form import VideoForm


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
    videoDict["user"]["is_following"] = current_user.id in [follower["id"] for follower in videoDict["user"]["followers"]] if current_user.is_authenticated else False

    videoDict["owned"] = current_user.id == user_id if current_user.is_authenticated else False

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


@video_routes.route('/newvideo', methods=['POST'])
def new_video():
    form = VideoForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        video = Video(
            title=form.data['title'],
            artist=form.data['artist'],
            video_path=form.data['video_path'],
            user_id=form.data['user_id'],
            category_id=form.data['category_id']
        )
        user = User.query.get(form.data['user_id'])
        user.video_collection.append(video)
        print(video)
        db.session.add(video)
        db.session.add(user)
        db.session.commit()
        return video.to_dict()
    print(form.errors)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@video_routes.route('/categories')
def video_genre():
    categories = Category.query.all()
    categoriesDict = {"categories": [category.to_dict() for category in categories]}
    return categoriesDict

@video_routes.route('/category/<int:category_id>')
def category_videos(category_id):
    videos = Video.query.filter_by(category_id=category_id).all()

    videosDict = {"videos": [video.to_dict() for video in videos]}

    return videosDict


@video_routes.route('/<int:video_id>/delete', methods=['DELETE'])
def delete_video(video_id):
    video = Video.query.get(video_id)

    comments = Comment.query.filter_by(video_id=video_id).all()

    for comment in comments:
        db.session.delete(comment)

    db.session.delete(video)
    db.session.commit()

    return {"deleted": "success"}




