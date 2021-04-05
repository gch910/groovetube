const VIDEO = "videos/VIDEO";
const USER_VIDEOS = "videos/USER_VIDEOS"
const COLLECTION_ADD = "videos/COLLECTION_ADD"
const ALL_VIDEOS = "videos/ALL_VIDEOS";
const POST_COMMENT = "/videos/POST_COMMENT";
const DELETE_COMMENT = "/videos/DELETE_COMMENT";
const UPLOADED_VIDEOS = "/videos/UPLOADED_VIDEOS"
const SEARCH_RESULTS = "videos/SEARCH_RESULTS";


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

const uploadedVideos = (videos) => {
  return {
    type: UPLOADED_VIDEOS,
    videos,
  }
}

const collectionAdd = (vids) => (
  {
    type: COLLECTION_ADD,
    vids,
  }
)

const allVideos = (videos) => (
  {
    type: ALL_VIDEOS,
    videos,
  }
)

const postComment = (comment) => {
  return {
    type: POST_COMMENT,
    comment: comment
  }
}

const deleteComment = () => {
  return {
    type: DELETE_COMMENT,
  }
}

const searchResults = (videos) => {
  return {
    type: SEARCH_RESULTS,
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
  const res = await fetch(`/api/videos/user/${userId}`)

  const data = await res.json();

  dispatch(userVideos(data.videos))

  return data;
}

export const getUploadedVideos = (userId) => async dispatch => {
  const res = await fetch(`/api/videos/user/${userId}/uploads`)

  const data = await res.json();

  dispatch(uploadedVideos(data.videos))
  
  return data;
}

export const addCollection = (userId, videoId) => async dispatch => {
  const res = await fetch(`/api/collection/${videoId}/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await res.json();

  dispatch(collectionAdd(data.collection))

  return data;

}

export const getAllVideos = () => async dispatch => {
  const res = await fetch("/api/videos");

  const data = await res.json();

  dispatch(allVideos(data.videos));

  return data;
}

export const postUserComment = (comment, videoId) => async dispatch => {
  const { content, user_id } = comment

  const res = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content,
      user_id,
      video_id: videoId
    }),
  })

  const data = await res.json()
  
  dispatch(postComment(data))

  return data
}

export const deleteUserComment = (commentId) => async dispatch => {
  const res = await fetch(`/api/videos/comment/${commentId}/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  console.log("response", res)
  const data = await res.json()

  dispatch(deleteComment())

  return data
}

export const getSearchResults = (search) => async dispatch => {
  const res = await fetch(`/api/videos/search`, {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
      search: search
    })
  })
  const data = await res.json();
  console.log(data);
  dispatch(searchResults(data.videos));

  return data.videos;
}


const initialState = {
  all_videos: [],
  search_results: [],
};

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
    case UPLOADED_VIDEOS: {
      newState = { ...state };
      const videos = action.videos;
      const newObj = {};
      videos.forEach(video => {
        newObj[video.id] = video
      })
      newState.uploaded_videos = newObj;
      return newState;
    }
    case COLLECTION_ADD: {
      newState = {...state};
      const collection = action.vids
      newState.collection = collection;
      return newState
    }
    case ALL_VIDEOS: {
      newState = {...state}
      const videos = action.videos;
      newState.all_videos = videos;
      return newState;
    }
    case POST_COMMENT: {
      newState = { ...state };
      // const userSongs = newState.user_songs = {}
      const comment = action.comment;
      newState.comments = comment;
      return newState;
    }
    case DELETE_COMMENT: {
      return state;
    }
    case SEARCH_RESULTS: {
      newState = {...state };
      const videos = action.videos;
      newState.search_results = videos;
      return newState;
    }
    default:
      return state;
  }
};

export default videosReducer;
