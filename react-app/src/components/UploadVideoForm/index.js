import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { newUpload } from "../../store/upload";
import "./UploadvideoForm.css";

const UploadVideoForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [selectgenres, setSelectGenres] = useState([]);
  const [genre, setGenre] = useState(1);
  const [video, setvideo] = useState(null);
  const [videoLoading, setvideoLoading] = useState(false);
  const [image, setImage] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("2021-03-24");

  useEffect(() => {
    fetch("/api/videos/categories")
      .then((response) => response.json())
      .then((data) => setSelectGenres(data.genres));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const video_path = new FormData();
    video_path.append("video", video);
    video_path.append("image", image);
    const videoAttributes = {
      title,
      release_date: date,
      user_id: user.id,
      genre_id: genre,
    };
    setvideoLoading(true);
    setImageLoading(true);
    const res = await dispatch(newUpload(video_path, videoAttributes));
    /* aws uploads can be a bit slow—displaying
    some sort of loading message is a good idea*/

    if (res.ok) {
      await res.json();
      setvideoLoading(false);
      setImageLoading(false);
      history.push("/");
    } else {
      setvideoLoading(false);
      setImageLoading(false);
      /* a real app would probably use more advanced
       error handling*/
    }
  };

  const updatevideo = (e) => {
    const file = e.target.files[0];
    setvideo(file);
  };
  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  return (
    selectgenres.length && (
      <div id="upload-form-div">
        <form id="upload-form" onSubmit={handleSubmit}>
          <h1 id="upload-h1">Upload a video</h1>
          <div>
            <label className="upload-label">video Title</label>
            <input
              className="upload-field"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="upload-label">Release Date</label>
            <input
              className="upload-field"
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <label className="upload-label">Select a genre</label>
            <select
              className="upload-field"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
            >
              {selectgenres.map((el, idx) => {
                return (
                  <option key={idx} value={el.id}>
                    {el.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label className="upload-label">Upload a video file</label>
            <input
              className="upload-field"
              type="file"
              accept="audio/*"
              onChange={updatevideo}
              required
            />
            {videoLoading && <p>Loading...</p>}
          </div>
          <div>
            <label className="upload-label">Upload an album image</label>
            <input
              className="upload-field"
              type="file"
              accept="image/*"
              onChange={updateImage}
            />
            {imageLoading && <p>Loading...</p>}
          </div>
          <div id="upload-submit-button-div">
            <button id="upload-submit-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default UploadVideoForm;