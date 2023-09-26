import axios from "axios";

export async function getPostInfo(id) {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${id}`);
  if (!res.data) return Error;
  return res.data;
}
