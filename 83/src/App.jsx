import Nav from "./Component/Nav"
import Mainroutes from "./Routes/Mainroutes"

const App = () => {
  return (
    <div className="h-screen w-screen py-10 px-[5%] text-[#d8f3dc]  bg-[#081c15] text- font-thin">
      <Nav />
      <Mainroutes />
    </div>
  )
}

export default App