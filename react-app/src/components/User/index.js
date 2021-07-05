import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UserVideos from "./UserVideos";
import UserUploads from "./UserUploads";
import UserFollowers from "./UserFollowers";
import UserFollowing from "./UserFollowing";
import { UserHeader, NotSessionHeader } from "./UserHeader";
import { addUserFollow } from "../../store/follows";
import { setProfileUser, unloadUser } from "../../store/profile";
import Button from "@material-ui/core/Button";
import "./User.css";

function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
  const { userId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const [collectionClicked, setCollectionClicked] = useState(true);
  const [uploadedClicked, setUploadedClicked] = useState(false);
  const [followersClicked, setFollowersClicked] = useState(false);
  const [followingClicked, setFollowingClicked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(user?.is_following);

  const addFollow = () => {
    dispatch(addUserFollow(user.id)).then((res) => {
      console.log(res.result);

      if (res.result === "follow") {
        setIsFollowing(true);
      } else {
        setIsFollowing(false);
      }
    });
  };

  const displayCollection = () => {
    setFollowersClicked(false);
    setUploadedClicked(false);
    setFollowingClicked(false);
    setCollectionClicked(true);
  };
  const displayUploads = () => {
    setCollectionClicked(false);
    setFollowersClicked(false);
    setFollowingClicked(false);
    setUploadedClicked(true);
  };
  const displayFollowers = () => {
    setCollectionClicked(false);
    setUploadedClicked(false);
    setFollowingClicked(false);
    setFollowersClicked(true);
  };
  const displayFollowing = () => {
    setCollectionClicked(false);
    setUploadedClicked(false);
    setFollowersClicked(false);
    setFollowingClicked(true);
  };

  useEffect(() => {
    dispatch(setProfileUser(userId));

    return () => dispatch(unloadUser());
  }, [dispatch, userId, followingClicked, followersClicked, isFollowing]);

  useEffect(() => {
    user && setIsFollowing(user.is_following);
  }, [dispatch, user]);

  return (
    user && (
      <div>
        <div id="user-header-div">
          <div id="collection-header">
            {!(sessionUser?.id === user.id) ? (
              <Button
                id="follow-profile-button"
                variant="contained"
                onClick={() => addFollow()}
              >
                {isFollowing ? "Unfollow" : `Follow`}
              </Button>
            ) : (
              ""
            )}
            <h1 id="user-favorites-h1">
              {collectionClicked ? (
                sessionUser?.id === user?.id ? (
                  <UserHeader user={user} text={"Your Collection"} />
                ) : (
                  <NotSessionHeader
                    user={user}
                    text={`${user.username}'s Collection`}
                  />
                )
              ) : (
                ""
              )}
            </h1>
          </div>
          <h1 id="user-favorites-h1">
            {uploadedClicked ? (
              sessionUser?.id === user?.id ? (
                <UserHeader user={user} text={"Your Uploads"} />
              ) : (
                <NotSessionHeader
                  user={user}
                  text={`${user.username}'s Uploads`}
                />
              )
            ) : (
              ""
            )}
          </h1>
          <h1 id="user-favorites-h1">
            {followersClicked ? (
              sessionUser?.id === user?.id ? (
                !user?.followers[0] ? (
                  <UserHeader user={user} text={"No Followers Yet"} />
                ) : (
                  <UserHeader user={user} text={"Your Followers"} />
                )
              ) : !user?.followers[0] ? (
                <NotSessionHeader
                  user={user}
                  text={`${user.username} Has No Followers`}
                />
              ) : (
                <NotSessionHeader
                  user={user}
                  text={`${user.username}'s Followers`}
                />
              )
            ) : (
              ""
            )}
          </h1>
          <h1 id="user-favorites-h1">
            {followingClicked ? (
              sessionUser?.id === user?.id ? (
                !user?.following[0] ? (
                  <UserHeader
                    user={user}
                    text={"You Aren't Following Anyone"}
                  />
                ) : (
                  <UserHeader user={user} text={"Following"} />
                )
              ) : !user?.following[0] ? (
                <NotSessionHeader
                  user={user}
                  text={`${user.username} Isn't Following Anyone`}
                />
              ) : (
                <NotSessionHeader
                  user={user}
                  text={`${user.username}'s Follows`}
                />
              )
            ) : (
              ""
            )}
          </h1>
        </div>
        <nav id="profile-nav">
          <button
            className={`profile-nav-link no-outline ${
              collectionClicked ? "active" : ""
            }`}
            onClick={displayCollection}
          >
            Collection
          </button>
          <button
            className={`profile-nav-link no-outline ${
              uploadedClicked ? "active" : ""
            }`}
            onClick={displayUploads}
          >
            Uploads
          </button>
          <button
            className={`profile-nav-link no-outline ${
              followersClicked ? "active" : ""
            }`}
            onClick={displayFollowers}
          >
            Followers
          </button>
          <button
            className={`profile-nav-link no-outline ${
              followingClicked ? "active" : ""
            }`}
            onClick={displayFollowing}
          >
            Following
          </button>
        </nav>
        <div id="profile-display">
          <div id="profile-songs-div">
            {collectionClicked ? (
              <UserVideos userId={userId} user={user} />
            ) : (
              ""
            )}
          </div>
          <div id="profile-popular-div">
            {uploadedClicked ? (
              <UserUploads
                userId={userId}
                sessionUser={sessionUser}
                user={user}
              />
            ) : (
              ""
            )}
          </div>
          <div id="profile-followers-div">
            {followersClicked ? (
              <UserFollowers
                userId={userId}
                displayCollection={displayCollection}
                user={user}
                sessionUser={sessionUser}
              />
            ) : (
              ""
            )}
          </div>
          <div id="profile-following-div">
            {followingClicked ? (
              <UserFollowing
                userId={userId}
                setFollowingClicked={setFollowingClicked}
                displayCollection={displayCollection}
                setIsFollowing={setIsFollowing}
                sessionUser={sessionUser}
                user={user}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    )
  );
}
export default User;
