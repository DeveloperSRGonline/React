import { useState } from "react";

const Create = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const newuser = { fullname, age };
    console.log(newuser); // yahi toh data hai jo hum backend mein bhejenge // api -backend -database
    // iske liye hi toh itna code like hai
    // set the user in the setusers
  };

  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState(18);

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => {
            setFullname(e.target.value);
          }}
          value={fullname}
          type="text"
          placeholder="Full Name"
        />
        <input
          onChange={(e) => {
            setAge(e.target.value);
          }}
          value={age}
          type="number"
          placeholder="Age"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
