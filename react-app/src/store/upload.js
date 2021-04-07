export const newUpload = (attributes) => async (dispatch) => {
  const res = await fetch("/api/videos/newvideo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(attributes),
  });
  const data = await res.json();
  return data;
};
