import React from "react";
import TodoList from "../(components)/TodoList";

const ViewTodos = () => {
  // const todos = [
  //   { id: 1, description: "Buy bread", status: "Incomplete" },
  //   { id: 2, description: "Buy eggs", status: "Incomplete" },
  //   { id: 3, description: "Buy cats", status: "Incomplete" },
  // ];

  return (
    <div style={{marginTop: '20px', marginLeft: "40%"}}>
      <strong style={{fontSize: '36px'}}>View Todos</strong>
      <br/>
      <br/>
      <br/>
      <TodoList />
    </div>
  );
};

export default ViewTodos;
