import axios from "axios";

export async function getCommentInfo(id) {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments?postId=${id}`
  );
  return res.data;
}
