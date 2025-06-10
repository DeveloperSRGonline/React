import { useEffect } from "react";
import { asyncgetusers } from "./Store/userAction";
import { useDispatch, useSelector } from "react-redux";
import './index.css';

const App = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
    dispatch(asyncgetusers());
  }, []);

  return (
    <div className="h-screen w-screen bg-black text-white font-thin">App</div>
  );
};

export default App;
