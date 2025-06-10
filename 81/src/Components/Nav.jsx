import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="h-[10%] flex justify-center gap-20 items-center p-4 bg-gray-800 text-white">
        <Link className="hover:text-amber-400 active:scale-[0.97]" to="/">Home</Link>
        <Link className="hover:text-amber-400 active:scale-[0.97]"to="/product">Procuct</Link>
        <Link className="hover:text-amber-400 active:scale-[0.97]"to="/service">Service</Link>
        <Link className="hover:text-amber-400 active:scale-[0.97]"to="/about">About</Link>
    </div>
  )
}

export default Nav