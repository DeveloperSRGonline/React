import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="h-[10%] flex justify-center gap-20 items-center p-4 bg-gray-800 text-white">
        <NavLink className={(e)=> (e.isActive ? "text-pink-500":"")} to="/">Home</NavLink>
        <NavLink className={(e)=> (e.isActive ? "text-pink-500":"" )} to="/product">Procuct</NavLink>
        <NavLink className={(e)=> (e.isActive ? "text-pink-500":"" )} to="/service">Service</NavLink>
        <NavLink className={(e)=> (e.isActive ? "text-pink-500":"" )} to="/about">About</NavLink>
    </div>
  )
}

export default Nav