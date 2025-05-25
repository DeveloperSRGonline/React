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
    <div className=" w-[50%] p-10 text-center  border-r-2 font-bold">
      <h1 className="p-10 text-8xl mt-10 mb-10">Create <span className="text-pink-400">Tasks</span></h1>
      <form onSubmit={submitHandler}>
        <input
          className="py-5 px-10 w-[60%] rounded-xl mb-10 border-b text-2xl font-thin outline-0"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="title"
        />
        <br />
        <br />
        <button className="cursor-pointer text-2xl bg-green-700 py-2 px-15 rounded-3xl active:scale-[0.97]">Create Todo</button>
      </form>
    </div>
  );
};

export default Create;
