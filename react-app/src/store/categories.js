const CATEGORIES = "/categories/CATEGORIES"
const CAT_VIDEOS = "/categories/CAT_VIDEOS"

const setCategories = (categories) => {
    return {
        type: CATEGORIES,
        categories,
    }
}

const catVideos = (videos) => {
    return {
        type: CAT_VIDEOS,
        videos,
    }
}

export const getCategories = () => async dispatch => {
    const res = await fetch("/api/videos/categories");

    const data = await res.json();

    dispatch(setCategories(data.categories))

    return data
}
export const getCatVideos = (categoryId) => async dispatch => {
    const res = await fetch(`/api/videos/category/${categoryId}`);

    const data = await res.json()
    console.log("this is the data", data)

    dispatch(catVideos(data.videos))

    return data
}

const initialState = {
    all_categories: {},
    category_videos: {},
}

const categoriesReducer = (state=initialState, action) => {
    let newState;
    switch(action.type) {
        case CATEGORIES: {
            newState = {...state}
            newState.all_categories = action.categories;
            return newState;
        }
        case CAT_VIDEOS: {
            newState = {...state}
            newState.category_videos = action.videos;
            return newState;
        }
        default:
            return state;
    }
}

export default categoriesReducer;