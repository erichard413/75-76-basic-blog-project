import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getUserInfo } from "../helpers/getUserInfo";
import { getPostsForUser } from "../helpers/getPostsForUser";
import { PostCard } from "./PostCard";
import { getTodosForUser } from "../helpers/getTodosForUser";
import { LoadingSpinner } from "./LoadingSpinner";
import { Err404 } from "./Err404";

export function UserPage() {
  const [user, setUser] = useState();
  const [posts, setPosts] = useState();
  const [todos, setTodos] = useState();
  const [loadState, setLoadState] = useState("loading");
  const [errors, setErrors] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const userRes = await getUserInfo(userId);
        if (!userRes) throw Error;
        setUser(userRes);
      } catch (err) {
        setErrors(err);
        return;
      }
      const postRes = await getPostsForUser(userId);
      setPosts(postRes);
      const todoRes = await getTodosForUser(userId);
      setTodos(todoRes);
    };
    getData();
    setLoadState("ready");
  }, []);

  if (loadState == "loading") {
    return <LoadingSpinner />;
  }

  if (errors) {
    return <Err404 error={errors} />;
  }

  return (
    <div className="container">
      <h1 className="page-title">{user?.name}</h1>
      <div className="page-subtitle">{user?.email}</div>
      <div>
        <b>Company:</b> {user?.company.name}
      </div>
      <div>
        <b>Website:</b> {user?.website}
      </div>
      <div>
        <b>Address:</b> {user?.address.street} {user?.address.suite}{" "}
        {user?.address.city} {user?.address.zipcode}
      </div>
      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        {posts?.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        {todos?.map(todo => (
          <li key={todo.id} className={todo.completed ? "strike-through" : ""}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
