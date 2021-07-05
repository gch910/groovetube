import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCatVideos } from "../../store/categories";
import imgs from "../Home/images";
import { imgKeyCreator, changeImg } from "../utils";
import "./Category.css";


//actual videos from a given category
const Category = () => {
  const dispatch = useDispatch();
  const categoryVids = useSelector((state) => state.categories.category_videos);
  const { categoryId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  let categoryName;

  if (categoryVids[0]) categoryName = categoryVids[0].category_name;

  useEffect(() => {
    dispatch(getCatVideos(categoryId)).then(() => setIsLoaded(true));
  }, [dispatch]);
  
  return (
    isLoaded && (
      <>
        <h1 id="category-h1">{categoryName}</h1>
        <div id="home-grid">
          {categoryVids?.map((video, idx) => {
            return (
              <div key={idx} id="thumbnail-div">
                <Link to={`/videos/${video?.id}`}>
                  <img
                    onMouseEnter={(e) => changeImg(e, video)}
                    onMouseLeave={(e) =>
                      imgs[imgKeyCreator(video.img_path)]
                        ? (e.target.src = imgs[imgKeyCreator(video.img_path)])
                        : (e.target.src = video.img_path)
                    }
                    id={video?.gif_path}
                    className="thumbnail"
                    src={
                      imgs[imgKeyCreator(video.img_path)]
                        ? imgs[imgKeyCreator(video.img_path)]
                        : video.img_path
                    }
                  />
                </Link>
                <Link id="thumbnail-h3-link" to={`/videos/${video?.id}`}>
                  <div id="thumbnail-h3-div">
                    <h3>{video.title}</h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </>
    )
  );
};

export default Category;
