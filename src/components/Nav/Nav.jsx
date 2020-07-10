import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./friends/friends";
import ProfileInfo from "../Profile/ProfileInfo/profileInfo";

const Nav = (props) => {
    return (
        <nav className={s.nav}>
            <ul ><div>
                <NavLink activeClassName ={s.active} className={s.first}  to="/Profile">Profile</NavLink></div>
                <div> <NavLink activeClassName ={s.active} className={s.first} to="/Dialogs">Dialogs</NavLink></div>
                <div> <NavLink activeClassName ={s.active} className={s.first}to="/Music">Music</NavLink></div>
                    <div> <NavLink  activeClassName ={s.active}className={s.first} to="/Others">Others</NavLink></div>
                <div>
                <Friends nameFriend={props.nameFriend}/>
                </div>
            </ul>
        </nav>
    );
};


export default Nav