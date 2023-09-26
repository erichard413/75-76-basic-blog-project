import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { LoadingSpinner } from "./LoadingSpinner";

export function Todos() {
  const [todos, setTodos] = useState();
  const [loadState, setLoadState] = useState("loading");

  useEffect(() => {
    async function getTodos() {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/todos`);
      setTodos(res.data);
    }
    getTodos();
  }, []);

  useEffect(() => {
    setLoadState("ready");
  }, [todos]);

  // if (loadState == "loading") {
  //   return <LoadingSpinner />;
  // }

  return (
    <>
      {loadState == "loading" ? (
        <LoadingSpinner />
      ) : (
        <div className="container">
          <h1 className="page-title">Todos</h1>
          <ul>
            {todos?.map(todo => (
              <li
                key={todo.id}
                className={todo.completed ? "strike-through" : ""}
              >
                {todo.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
