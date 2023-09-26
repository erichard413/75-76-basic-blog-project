import axios from "axios";

export async function getUserInfo(userId) {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/users/${userId}`
  );
  if (!res.data) return Error;
  return res.data;
}
