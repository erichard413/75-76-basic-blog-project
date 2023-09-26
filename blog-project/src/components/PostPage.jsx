import { getPostInfo } from "../helpers/getPostInfo";
import { getUserInfo } from "../helpers/getUserInfo";
import { getCommentInfo } from "../helpers/getCommentInfo";
import { CommentCard } from "./Comment";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "./LoadingSpinner";
import { useNavigate } from "react-router";
import { Err404 } from "./Err404";

export function PostPage() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [userData, setUserData] = useState();
  const [postData, setPostData] = useState();
  const [commentData, setCommentData] = useState();
  const [loadState, setLoadState] = useState("loading");
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const postRes = await getPostInfo(postId);
        const userRes = await getUserInfo(postRes.userId);
        const commentRes = await getCommentInfo(postId);
        setPostData(postRes);
        setUserData(userRes);
        setCommentData(commentRes);
      } catch (err) {
        setErrors(err);
        return;
      }
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
      <h1 className="page-title">{postData?.title}</h1>
      <span className="page-subtitle">
        By: <Link to={`/users/${postData?.userId}`}>{userData?.name}</Link>
      </span>
      <div>{postData?.body}</div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {commentData?.map(comment => (
          <CommentCard comment={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
}
