import { useState } from "react";
import Create from "./Components/Create";
import Read from "./Components/Read";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "kuchh toh karlo dhanng ka", isCompleted: true },
  ]);

  const [title, settitle] = useState("");

  return (
    <>
      <Create todos={todos} settodos={settodos} />
      <hr />
      <Read todos={todos} settodos={settodos} />
    </>
  );
};

export default App;
