import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import UserVideos from "../UserVideos";
import UserUploads from "../UserUploads";
import UserFollowers from "../UserFollowers";
import UserFollowing from "../UserFollowing";
import { addUserFollow, getUserFollows } from "../../store/follows";
import { setProfileUser, unloadUser } from "../../store/profile";
import Button from "@material-ui/core/Button";
import "./User.css";

function User() {
  const dispatch = useDispatch();
  // const [user, setUser] = useState({});
  const user = useSelector(state => state.profile.user)
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

  const gifKeyCreator = (path) => {
    const pathName = path.split("/")[2];

    const gifKey = pathName?.slice(0, pathName.indexOf("."));

    return gifKey;
  };
  const imgKeyCreator = (path) => {
    const pathName = path.split("/")[2];

    const imgKey = pathName?.slice(0, pathName.indexOf("."));

    return imgKey;
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
    
    // (async () => {
    //   const response = await fetch(`/api/users/${userId}`);
    //   const user = await response.json();
    //   console.log(user)
    //   setUser(user);
    // })();
    user &&
    setIsFollowing(user.is_following)
    
  }, [dispatch, user]);


  useEffect(() => {
    console.log(userId)
    // if (!userId) {
    //   return;
    // }
    dispatch(setProfileUser(userId))
    user && dispatch(getUserFollows(user.id));

    return () => dispatch(unloadUser())
  
  }, [dispatch, userId, followingClicked])

  // if (!userId) {
  //   return <Redirect to="/login" />;
  // }
  console.log("this is the user", user)
  return user && ( 
    <div>
      <div id="">
        <div id="collection-header">
          {!(sessionUser?.id === user.id) ?
            <Button
              id="follow-profile-button"
              variant="contained"
              onClick={() => addFollow()}
            >
              {isFollowing ? "Unfollow" : `Follow`}
             
            </Button> : ""
          }
          <h1 id="user-favorites-h1">
            {collectionClicked
              ? sessionUser?.id === user?.id
                ? "Your Collection"
                : `${user.username}'s Collection`
              : ""}
          </h1>
        </div>
        <h1 id="user-favorites-h1">
          {uploadedClicked
            ? sessionUser?.id === user?.id
              ? "Your Uploads"
              : `${user.username}'s Uploads`
            : ""}
        </h1>
        <h1 id="user-favorites-h1">
          {followersClicked
            ? sessionUser?.id === user?.id
              ? "Your Followers"
              : `${user.username}'s Followers`
            : ""}
        </h1>
        <h1 id="user-favorites-h1">
          {followingClicked
            ? sessionUser?.id === user?.id
              ? "Users You Follow"
              : ` Users ${user.username} Follows`
            : ""}
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
            <UserVideos
              userId={userId}
              gifKeyCreator={gifKeyCreator}
              imgKeyCreator={imgKeyCreator}
              user={user}
            />
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
              gifKeyCreator={gifKeyCreator}
              imgKeyCreator={imgKeyCreator}
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
              followingClicked={followingClicked}
              setFollowingClicked={setFollowingClicked}
              displayFollowers={displayFollowers}
              displayCollection={displayCollection}
              displayFollowing={displayFollowing}
              sessionUser={sessionUser}
              user={user}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
export default User;
