const VIDEO = "videos/VIDEO";
const USER_VIDEOS = "videos/USER_VIDEOS"

const video = (video) => {
  return {
    type: VIDEO,
    video,
  };
};

const userVideos = (videos) => {
  return {
    type: USER_VIDEOS,
    videos,
  }
}

export const getVideo = (videoId) => async (dispatch) => {
  const res = await fetch(`/api/videos/${videoId}`);

  const data = await res.json();

  dispatch(video(data.video));

  return data;
};

export const getUserVideos = (userId) => async dispatch => {
  console.log("in get user videos")
  const res = await fetch(`/api/videos/user/${userId}`)

  const data = await res.json();
  console.log("data get user videos", data)

  dispatch(userVideos(data.videos))

  return data;
}

const initialState = {};

const videosReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case VIDEO: {
      newState = { ...state };
      newState.current_video = action.video;
      return newState;
    }
    case USER_VIDEOS: {
      newState = { ...state };
      const videos = action.videos;
      const newObj = {};
      videos.forEach(video => {
        newObj[video.id] = video
      })
      newState.user_videos = newObj;
      return newState;
    }
  
    default:
      return state;
  }
};

export default videosReducer;
