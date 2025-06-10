import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Product from './Components/Product'
import Service from './Components/Service'
import About from './Components/About'
import Nav from './Components/Nav'

const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-900 text-white">
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  )
}

export default App