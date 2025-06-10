import axios from "axios"

const Home = () => {
  const getProduct = async () => {
    try{
      // Fetching data from the fake store API
      // This API provides a list of 20 domy products

      // using axios
      const {data} = await axios.get("https://fakestoreapi.com/products")

      // using fetch
      // const strdata = await fetch("https://fakestoreapi.com/products")
      // const data = await strdata.json()
      console.log(data)
    }catch (error){
      console.log(error)
    }
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={getProduct}>Get Products</button>
    </div>
  )
}

export default Home