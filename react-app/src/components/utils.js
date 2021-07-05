import gifs from "./Home/gifs";


export const gifKeyCreator = (path) => {
  const pathName = path.split("/")[2];

  const gifKey = pathName?.slice(0, pathName.indexOf("."));

  return gifKey;
};
export const imgKeyCreator = (path) => {
  const pathName = path.split("/")[2];

  const imgKey = pathName?.slice(0, pathName.indexOf("."));

  return imgKey;
};

export const changeImg = (e, video) => {
  if (video && gifs[gifKeyCreator(video.gif_path)]) {
    e.target.src = gifs[gifKeyCreator(video.gif_path)];
  } else {
    video && (e.target.src = "https://i.stack.imgur.com/y9DpT.jpg");
  }
};
