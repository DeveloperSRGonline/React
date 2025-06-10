import Nav from './Components/Nav'
import Mainroutes from './routes/Mainroutes'

const App = () => {
  return (
    <div className="w-screen h-screen  bg-gray-900 text-white">
      <Nav />
      <Mainroutes />
    </div>
  )
}

export default App