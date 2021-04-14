import React, {useState} from "react";
import Button from '@material-ui/core/Button';

const ButtonDiv = ({addFollow, addVideo, userVideos, video, sessionUser, isFollowing }) => {
    // const [isFollowing, setIsFollowing] = useState(console.log("video is following!", video.user.is_following) || video.user.is_following);
    

    return (
        
        <div id="add-video-button-div">
          <Button id="add-button" variant="contained" onClick={addVideo}>
            {userVideos?.some((vid) => vid.id == video.id)
              ? "Added"
              : "Add"}
          </Button>
          {video.user.id !== sessionUser.id && (
          <Button id="follow-button" variant="contained" onClick={() => addFollow()}>
              {isFollowing
              ? "Unfollow"
              : `Follow`
            }
          </Button>
          )}
        </div>
    )
}

export default ButtonDiv;