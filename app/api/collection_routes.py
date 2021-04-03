from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Video, User, user_collection

collection_routes = Blueprint("collection", __name__)

@collection_routes.route("/<int:video_id>/<int:user_id>")
def collection_add(video_id, user_id):
    new_video = Video.query.get(video_id)

    user = User.query.get(user_id)

    # new_video.user_collection.append(user)\
    user.video_collection.append(new_video)

    db.session.add(user)
    db.session.commit()

    result_dict = {"user": user.to_dict()}

    return result_dict





