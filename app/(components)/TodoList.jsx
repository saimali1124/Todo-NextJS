"use client";

import { useEffect, useState } from "react";

const buttonStyle = {
  borderRadius: "12px",
  backgroundColor: "blue",
  color: "white",
  border: "none",
  padding: "10px 15px",
  margin: "5px",
  cursor: "pointer",
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [update, setUpdate] = useState("");

  const onDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/list/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Todo not deleted");
      } else {
        window.alert("Todo Deleted!");
        setUpdate(id);
      }
    } catch (error) {
      window.alert("Error: Todo Not Deleted!");
      console.log(error);
    }
  };

  const onComplete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/list/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Todo not updated");
      } else {
        window.alert("Status Updated!");
        setUpdate(id);
      }
    } catch (error) {
      window.alert("Error: Status not updated!");
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/list", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch todos");
        }

        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.log("Error fetching todos:", error);
      }
    };
    fetchTodos();
  }, [update]);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          <p>
            <strong>Description:</strong> {todo.description}
          </p>
          <p>
            <strong>Status:</strong> {todo.status==true? "Done": "Not Done"}
          </p>
          <button onClick={() => onDelete(todo._id)} style={buttonStyle}>
            Delete
          </button>
          <button onClick={() => onComplete(todo._id)} style={buttonStyle}>
            Complete
          </button>
          <p>---------------------------</p>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
