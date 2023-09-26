import axios from "axios";

export async function getPostsForUser(userId) {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts?userId=${userId}`
  );
  return res.data;
}
