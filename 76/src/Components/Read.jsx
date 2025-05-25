import { useState } from "react";

const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const [title, settitle] = useState("");

  const randertodos = todos.map((todo) => {
    return <li style={{color: todo.isCompleted ? "green":"tomato"}} key={todo.id}>{todo.title}</li>;
  });

  return (
    <div>
      <h1>Pending Todos</h1>
      <ol>{randertodos}</ol>
    </div>
  );
};

export default Read;
