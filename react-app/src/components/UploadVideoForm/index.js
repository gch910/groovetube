import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { newUpload } from "../../store/upload";
import "./UploadVideoForm.css";

const UploadVideoForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [selectCategories, setSelectCategories] = useState([]);
  const [category, setCategory] = useState(1);
  const [video, setvideo] = useState("");
  const [image, setImage] = useState("");
  const [gif, setGif] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [gifLoading, setGifLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [success, setSuccess] = useState(false);

  const getYoutubeEmbed = (link) => {
    const linkEmbed = link.replace("watch?v=", "embed/")
    return linkEmbed
  }

  useEffect(() => {
    fetch("/api/videos/categories")
      .then((response) => response.json())
      .then((data) => setSelectCategories(data.categories));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const embed = getYoutubeEmbed(video)

    const videoAttributes = {
      title,
      artist: artist,
      video_path: embed,
      img_path: image,
      gif_path: gif,
      user_id: user.id,
      category_id: category,
    };
 
    dispatch(newUpload(videoAttributes));


    setSuccess(true)
    setTimeout(() => {
      history.push("/");
    }, 1500)
      
    // } 
  };

 
  return (
    selectCategories.length && (
      <div id="upload-form-div">
        <form id="upload-form" onSubmit={handleSubmit}>
          <h1 id="upload-h1">Upload a video</h1>
          <div className="upload-div">
            <label className="upload-label">video Title</label>
            <input
              className="upload-field"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="upload-div">
            <label className="upload-label">Artist</label>
            <input
              className="upload-field"
              type="text"
              value={artist}
              onChange={(e) => {
                setArtist(e.target.value);
              }}
              required
            />
          </div>
          <div className="upload-div">
            <label className="upload-label">Select a Category</label>
            <select
              className="upload-field"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              {selectCategories.map((el, idx) => {
                return (
                  <option key={idx} value={el.id}>
                    {el.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="upload-div">
            <label className="upload-label">YouTube Link to Upload</label>
            <input
              className="upload-field"
              type="text"
              onChange={(e) => setvideo(e.target.value)}
              required
            />
          </div>
          <div className="upload-div">
            <label className="upload-label">Upload Video Thumbnail</label>
            <input
              className="upload-field"
              type="text"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="upload-div">
            <label className="upload-label">Upload Video Gif</label>
            <input
              className="upload-field"
              type="text"
              // accept="image/*"
              onChange={(e) => setGif(e.target.value)}
            />
          </div>
          <div id="upload-submit-button-div">
            <button id="upload-submit-button" type="submit">
              {success ? "Success!" : "Upload"}
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default UploadVideoForm;
