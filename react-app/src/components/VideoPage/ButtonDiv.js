import React, {useState} from "react";

const ButtonDiv = ({addFollow, addVideo, userVideos, video, sessionUser }) => {
    const [isFollowing, setIsFollowing] = useState(video.user.is_following);

    return (
        
        <div id="add-video-button-div">
          <button id="add-button" onClick={addVideo}>
            {userVideos?.some((vid) => vid.id == video.id)
              ? "Added"
              : "Add Video"}
          </button>
          {video.user.id !== sessionUser.id && (
          <button id="follow-button" onClick={() => addFollow(setIsFollowing)}>
              {isFollowing
              ? "Following"
              : `Follow`
            }
          </button>
          )}
        </div>
    )
}

export default ButtonDiv;