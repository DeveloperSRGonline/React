import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  // par ye toh hardcoded data hai
  const [users, setUsers] = useState([
    { name: "John", age: 21 },
    { name: "Rahul", age: 23 },
    { name: "Ayush", age: 43 },
  ]);

  return (
    <div>
      <Create />
      {/* data pass kar rahe hai */}
      <Read users={users} setUsers={setUsers}/>
      {/* Read(users,setusers) */}
    </div>
  );
};

export default App;

// two way binding is for form element only
// react debugging and component me todne ke liye use karte hai

// C – Create
// R – Read
// U – Update
// D – Delete

// react says one component has to purform only one operation either (C,R,U,D) anyone from it and on the basis of this we have to divide the components

// <Create />
      // <Read /> ye dono child hai app ke kyo ye app andar use ho rahe hai 

// aise children jo same data share karte hai us data ko parent me rakha jata hai in case of props drilling 