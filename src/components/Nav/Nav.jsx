import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul ><div>
                <NavLink activeClassName ={s.active} className={s.first}  to="/Profile">Profile</NavLink></div>
                <div> <NavLink activeClassName ={s.active} className={s.first} to="/Dialogs">Dialogs</NavLink></div>
                <div> <NavLink activeClassName ={s.active} className={s.first}to="/Music">Music</NavLink></div>
                    <div> <NavLink  activeClassName ={s.active}className={s.first} to="/Others">Others</NavLink></div>
            </ul>
        </nav>
    );
};


export default Nav