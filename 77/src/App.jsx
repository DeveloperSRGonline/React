import { useState } from "react";
import Create from "./Components/Create";
import Read from "./Components/Read";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "kaam kar le bhai", isCompleted: false },
  ]);

  const [title, settitle] = useState("");

  return (
    <div className="flex text-cyan-100 w-screen h-screen bg-zinc-900 p-10 border-r-2">
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
