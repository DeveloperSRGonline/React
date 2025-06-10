import { Route, Routes } from "react-router-dom"

const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
    </Routes>
  )
}

export default Mainroutes