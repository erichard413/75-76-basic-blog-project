import React from "react";
import { UserCard } from "./UserCard";
import { useLoaderData } from "react-router";
import { LoadingSpinner } from "./LoadingSpinner";

export function Users() {
  const users = useLoaderData();
  if (!users) return <LoadingSpinner />;

  return (
    <div className="container">
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {users?.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
