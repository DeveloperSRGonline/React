import { Route, Routes } from "react-router-dom";
import About from "../Components/About";
import Home from "../Components/Home";
import Product from "../Components/Product";
import Service from "../Components/Service";
import ProductDetails from "../Components/ProductDetails";
import ServiceDetails from "../Components/ServiceDetails";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/detail/:name" element={<ProductDetails />} />
      <Route path="/service" element={<Service />}>
      <Route path="/service/detail" element={<ServiceDetails />}/>
      </Route>
      
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Mainroutes;
