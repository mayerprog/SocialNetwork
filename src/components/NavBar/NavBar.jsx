import React from "react";
import n from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import di from "../Dialogues/Dialogues.module.css";
import Post from "../Profile/MyPosts/Post/Post";
import Header from "../Header/Header";
import Friends from "../Friends/Friends";


const NavBar = (props) => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink to="/profile" activeClassName={n.activeLink}>Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/dialogues" activeClassName={n.activeLink}>Messages</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/news" activeClassName={n.activeLink}>News</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/music" activeClassName={n.activeLink}>Music</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/settings" activeClassName={n.activeLink}>Settings</NavLink>
            </div>
            <div>
                <Friends data={props.data.sideBarPage}/>
            </div>
        </nav>
    );
};

export default NavBar;