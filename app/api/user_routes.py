from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route("/me/following", methods=['POST'])
@login_required
def add_follower():
    body = request.get_json()

    user = User.query.get(body["person_to_follow_id"])
    result = {}

    if current_user.id not in [follower.id for follower in user.followers]:

        user.followers.append(current_user)

        db.session.add(user)
        result["success"] = True
        result["result"] = "follow" 
        
    else:
        user.followers = filter(lambda follower: follower.id != current_user.id, user.followers)
        db.session.add(user)
        result["success"] = True
        result["result"] = "unfollow" 


    db.session.commit()
    return result


@user_routes.route("/followers/<int:user_id>")
def get_followers(user_id):
    user = User.query.get(user_id)

    result_dict = {"followers": user.to_dict()["followers"]}

    return result_dict

    


    # return {"success": False}




