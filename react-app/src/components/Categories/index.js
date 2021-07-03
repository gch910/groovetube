import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../store/categories";
import "./Categories.css";

//list of categories with links to vids from that category
const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.all_categories);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getCategories()).then(() => setIsLoaded(true));
  }, [dispatch]);

 
  return (
    isLoaded && (
      <>
        <h1 id="categories-h1">Categories</h1>
        <div id="categories-div">
          {categories.map((cat) => (
            <Link id="categories-link" to={`category/${cat.id}`}>
              <h2 id="categories-h2">{cat.name}</h2>
            </Link>
          ))}
        </div>
      </>
    )
  );
};

export default Categories;
