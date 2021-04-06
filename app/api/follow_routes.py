from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, User, follows

follow_routes = Blueprint("follow", __name__)


@follow_routes.route("/<int:user_id>")
def get_followers(user_id):
    user = User.query.get(user_id)

    result_dict = {f"{user.to_dict()['username']}'s followers": user.followers_dict()["followers"]}

    return result_dict


@follow_routes.route("/<int:session_user_id>/<int:user_id>", methods=['POST'])
def add_follower(session_user_id, user_id):
    session_user = User.query.get(session_user_id)

    user = User.query.get(user_id)

    user.followers.append(session_user)

    db.session.add(user)
    db.session.commit()

    result_dict = {f"{user.to_dict()['username']}'s followers": user.followers_dict()["followers"]}

    return result_dict