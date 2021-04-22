import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../store/categories";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.all_categories);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getCategories()).then(() => setIsLoaded(true))
  }, [dispatch]);

  console.log(categories);
  return (
    isLoaded && (
      <div>
        <h1>Categories</h1>;
        {categories.map(cat => (
            <Link to={`category/${cat.id}`}><h2>{cat.name}</h2></Link>
        ))}
      </div>
    )
  );
};

export default Categories;
