import React from "react";
import { NavLink } from "react-router-dom";
import h from "./Header.module.css";

const Header = (props) => {
  return (<header className={h.header}>
    <div className={h.login}>
      {props.isAuth 
        ? props.login
        : <NavLink to={"/login"}>Login</NavLink>
      }
    </div>
    <img src="https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg" />
  </header>
  );
};

export default Header;