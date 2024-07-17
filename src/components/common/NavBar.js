import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/Context";

const NavBar = () => {
  const { user, logout } = useContext(Context);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {user ? (
        <>
          <span>{user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </nav>
  );
};

export default NavBar;
