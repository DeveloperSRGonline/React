import { nanoid } from "nanoid";
import { useState } from "react";

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const [title, settitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let newtodo = {
      id: nanoid(),
      title,
      isCompleted: false,
    };
    settitle("");

    let copytodos = [...todos];
    copytodos.push(newtodo);
    settodos(copytodos);
    // uper wali line ka upgraded version
    // settodos([...todos,newtodo])
  };

  return (
    <div>
      <h1>Create Tasks</h1>
      <form onSubmit={submitHandler}>
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="title"
        />
        <br />
        <br />
        <button>Create Todo</button>
      </form>
    </div>
  );
};

export default Create;
