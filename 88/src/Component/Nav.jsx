import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-center gap-10 items-center font-bold ">
      <NavLink
        className={(e) =>
          e.isActive ? "text-[#afff59]  " : "active:scale-[0.97]"
        }
        to="/"
      >
        HOME
      </NavLink>
      <NavLink
        className={(e) =>
          e.isActive ? "text-[#afff59] " : "active:scale-[0.97]"
        }
        to="/recipes"
      >
        RECIPES
      </NavLink>
      <NavLink
        className={(e) =>
          e.isActive ? "text-[#afff59] " : "active:scale-[0.97]"
        }
        to="/about"
      >
        ABOUT
      </NavLink>
      <NavLink
        className={(e) =>
          e.isActive ? "text-[#afff59]" : " active:scale-[0.97]"
        }
        to="/create-recipe"
      >
        CREATE
      </NavLink>
      <NavLink
        className={(e) =>
          e.isActive ? "text-[#afff59]" : " active:scale-[0.97]"
        }
        to="/fav"
      >
        FAVOURITES
      </NavLink>
    </div>
  );
};

export default Nav;
