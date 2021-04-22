import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCatVideos } from "../../store/categories";

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
    <div>
      <h1>{categoryName}</h1>
    </div>
  );
};

export default Category;
