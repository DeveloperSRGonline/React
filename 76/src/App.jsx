import { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "kuchh toh karlo dhanng ka", isCompleted: false },
  ]);

  const [title, settitle] = useState(""); // title ki value yaha save ho raha hai
  const [completed, setcompleted] = useState(true); // checkbox ki value yaha save ho raha hai
  const [gender, setgender] = useState("");// gender ki value yaha save ho rahi hai
  const [city, setcity] = useState('delhi')// city ki value yaha save ho rahi hai 

  return (
    <div>
      <h1>Create Tasks</h1>
      <form>
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="title"
        />
        <br />
        <br />
        <input
          checked={completed}
          onChange={(e) => setcompleted(e.target.checked)}
          type="checkbox"
        />
        Complted
        <br />
        <br />
        <input
          value="male"
          onChange={(e) => setgender(e.target.checked)}
          type="radio"
          checked={gender == "male" && true}
        />
        male
        <br />
        <br />
        <input
          value= "female"
          onChange={(e) => setgender(e.target.checked)}
          type="radio"
          checked = {gender == "female" && true}
        />
        female
        <br />
        <br />
        <select value={city} onChange={(e)=> setcity(e.target.value)}>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
        </select>
        <button>Create Todo</button>
      </form>
    </div>
  );
};

export default App;
