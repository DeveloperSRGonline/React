import { useEffect } from "react";
import Nav from "./components/Nav";
import "./index.css";
import Mainroutes from "./routes/Mainroutes";
import { asyncCurrentUser } from "./store/actions/userActions";
import { useDispatch } from "react-redux";
const App = () => {

  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(asyncCurrentUser())
  },[])

  return (
    <div className="min-h-screen font-sans bg-[#121212] text-[#f3f3f3]">
      <Nav />
      <main className="px-4 md:px-8 ">
        <Mainroutes />
      </main>
    </div>
  );
};

export default App;
