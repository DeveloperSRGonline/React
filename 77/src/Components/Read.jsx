import { useState } from "react";
import css from "./Read.module.css";

const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const [title, settitle] = useState("");

  const DeleteHandler = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id != id);
    settodos(filteredTodo);
  };

  const randertodos = todos.map((todo) => {
    return (
      <li className="flex justify-between items-center p-4 bg-zinc-800 rounded-xl w-[100%]" key={todo.id}>
        <span className="text-2xl font-thin">{todo.title}</span>
        <button
          className="text-rose-400 cursor-pointer active:scale-[0.97]"
          onClick={() => DeleteHandler(todo.id)}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <div className="py-15 px-20">
      <h1 className="text-5xl mb-10 m10 text-pink-400 font-bold">
        Pending Todos
      </h1>
      <ol className="flex items-center justify-between gap-5 flex-col">
        {randertodos}
      </ol>
    </div>
  );
};

export default Read;

// data = [q,q,q,q,q,r]

// r = data.filter(d => d != q)
// r [q,q,q,q,q] -- (d == q) data me jab bhi array hoga tab hi return hoga - saare q bahar
// r [r] - jab bhi (d != q) raha tab q ko chhod ke dusre jo bhi in this example i.e "r"
