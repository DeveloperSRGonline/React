import { useState } from "react";

const App = () => {
  const [username , setUsername] = useState("Shivam")

const changeHandler = () => {
  setUsername("Ankur")
}
console.log(username)
  return (
    <div>
      <h1>Username</h1>
      <h2>{username}</h2>
      <button onClick={changeHandler}>Change Name</button>
    </div>
  )
}

export default App


// const App = () => {
  // const profiles = [
  //   { name: "John", age: 12 },
  //   { name: "Rahul", age: 34 },
  //   { name: "Johny", age: 23 },
  // ];

  // const updatedProfiles = profiles.map((profile, index) => {
  //   return (
  //     <li key={index}>
  //       <span>Name : {profile.name}</span> | 
  //       <span>Age : {profile.age}</span>
  //     </li>
  //   );
  // });

  // let arr = [<h1>ddd</h1>,<h1>ddd</h1>]

  // return (
  //   <>
  //     <h1>Rendering json</h1>
  //     <ol>{updatedProfiles}</ol>
  //   </>
  // );

  //   let n = 12; // number
  //   let s = "Hello World"; // string
  //   let b = true; // boolean
  //   let nu = null; // null
  //   let un = undefined; // undefined
  //   let arr = [<h1></h1>,12, "hello", true, null, undefined]; // array
  //   let obj = { name: "John", age: 21 }; // object
  //   return (
  //     <>
  //       <h1>Datatypes</h1>
  //       <h1>Number : {n}</h1>
  //       <h1>String : {s}</h1>
  //       {/* view mein boolean value use nahi kar sakte */}
  //       <h1>boolean : {b ? "hello" : "not hello" }</h1>
  //       <h1>Null : {nu}</h1>
  //       <h1>Undefined : {un}</h1>
  //       <h1>Array : {arr}</h1>
  //       <h1>Object : {obj.name} | {obj.age}</h1>
  //     </>
  //   );
// };

// export default App;

// view mein reserved keywords nahi dikhte hai
// react mein ek power hai ki vo array ko directly print kar sakte hai(concatenate karke)
// array mein hum "let arr: (string | number | boolean | JSX.Element | null | undefined)[]" ye saari chije pass kar sakte hai
// forEach ka use nahi karna hai kyo ki forEach return nahi karta as map isliye map use karna 