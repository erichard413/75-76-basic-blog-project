import { useNavigate } from "react-router";

export function UserCard({ user }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="card-grid">
        <div className="card">
          <div className="card-header">{user.name}</div>
          <div className="card-body">
            <div>{user.company.name}</div>
            <div>{user.website}</div>
            <div>{user.email}</div>
          </div>
          <div className="card-footer">
            <button
              className="btn"
              onClick={() => navigate(`/users/${user.id}`)}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
