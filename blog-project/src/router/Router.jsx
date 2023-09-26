import { createBrowserRouter } from "react-router-dom";
import { Posts } from "../components/Posts";
import { Users } from "../components/Users";
import { Todos } from "../components/Todos";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { UserPage } from "../components/UserPage";
import { PostPage } from "../components/PostPage";
import { NewPost } from "../components/NewPost";
import { Err404 } from "../components/Err404";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "/", element: <Navigate to="/posts" /> },
      {
        path: "/posts",
        element: <Posts />,
        loader: async ({ request: { signal } }) => {
          return await fetch(`${import.meta.env.VITE_API_URL}/posts`, {
            signal,
          });
        },
      },
      {
        path: "/users",
        element: <Users />,
        loader: async ({ request: { signal } }) => {
          return await fetch(`${import.meta.env.VITE_API_URL}/users`, {
            signal,
          });
        },
      },
      { path: "/todos", element: <Todos /> },
      {
        path: "/users/:userId",
        element: <UserPage />,
      },
      {
        path: "/posts/new",
        element: <NewPost />,
      },
      {
        path: "/posts/:postId",
        element: <PostPage />,
      },
      {
        path: "/404",
        element: <Err404 />,
      },
    ],
  },
]);

function NavLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
