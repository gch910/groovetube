const VIDEO_UPLOAD = "uploads/VIDEO_UPLOAD"

const videoUpload = (video) => {
  return {
    type: VIDEO_UPLOAD,
    video,
  }
}

export const newUpload = (attributes) => async (dispatch) => {
  const res = await fetch("/api/videos/newvideo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(attributes),
  });
  const data = await res.json();

  dispatch(videoUpload(data))
  return data;
};

const initialState = {
  uploadedVideo: {},
};

const uploadsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case VIDEO_UPLOAD: {
      newState = { ...state };
      const video = action.video;
      newState.uploadedVideo = video;
      return newState;
    }
    default:
      return state;
  }
};

export default uploadsReducer;
