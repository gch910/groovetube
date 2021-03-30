const VIDEO = "videos/VIDEO";

const video = (video) => {
  return {
    type: VIDEO,
    video,
  };
};

export const getVideo = (videoId) => async (dispatch) => {
  const res = await fetch(`/api/videos/${videoId}`);

  const data = await res.json();

  dispatch(video(data.video));

  return data;
};

const initialState = {};

const videosReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case VIDEO: {
      newState = { ...state };
      newState.current_video = action.video;
      return newState;
    }
    default:
      return state;
  }
};

export default videosReducer;
