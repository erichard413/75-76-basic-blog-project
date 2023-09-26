import axios from "axios";

export async function doNewPost(data, userId = 1) {
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/posts`, {
      ...data,
      userId,
    });
    return;
  } catch (err) {
    return err;
  }
}
