import { useEffect } from "react"
import axios from "./api/axiosConfig"

const App = () => {

  const getProducts = async () => {
    try {
      const resonse = await axios.get("/products")
      console.log(resonse)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  },[])
  return (
    <div>App</div>
  )
}

export default App