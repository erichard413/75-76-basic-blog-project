import axios from "axios";

export async function getTodosForUser(userId) {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/todos?userId=${userId}`
  );
  return res.data;
}
