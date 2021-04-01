import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideo } from "../../store/videos";
import "./Home.css"


const Home = () => {
    const dispatch = useDispatch();
    const video = useSelector(state => state.videos.current_video)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=> {
        dispatch(getVideo(1)).then(() => setIsLoaded(true))
    }, [dispatch])

    console.log(video)

    return isLoaded && (
        <>
            <video id="test-video" className="no-outline" width="320" height="240" controls>
            <source src={video.video_path} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <iframe width="480" height="270" src="//www.youtube.com/embed/adLGHcj_fmA\" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
        </>

    )
}

export default Home;