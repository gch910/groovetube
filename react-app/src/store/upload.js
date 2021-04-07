export const newUpload = (formFile, attributes) => async (dispatch) => {
    const res = await fetch("/api/videos/upload", {
      method: "POST",
      body: formFile,
    });
    const data = await res.json();
  
    if (!res.errors) {
      attributes.image_path = data.image_url;
      attributes.video_path = data.video_path;
      console.log(attributes);
      const res2 = await fetch("/api/videos/newvideo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(attributes),
      });
      const data2 = await res2.json();
      return data2;
    }
  };