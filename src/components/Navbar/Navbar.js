import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {FriendsBlockContainer} from "./FriendsBlock/FriendsBlockContainer";

const setActive = ({isActive}) => isActive ? classes.activeLink : classes.item;

function Navbar(props) {
    return (
        <div className={classes.navBar}>
        <nav className={classes.navLinks}>
            <NavLink className={setActive} to={'profile'}>Profile</NavLink>
            <NavLink className={setActive} to={'dialogs'}>Dialogs</NavLink>
            <NavLink className={setActive} to={'users'}>Users</NavLink>
            <NavLink className={setActive} to={'news'}>News</NavLink>
            <NavLink className={setActive} to={'music'}>Music</NavLink>
            <NavLink className={setActive} to={'settings'}>Settings</NavLink>
        </nav>
            <FriendsBlockContainer/>
        </div>
    )
}

export default Navbar;