import React from 'react';
import s from './friends.module.css';
import {NavLink} from "react-router-dom";
import FriendsList from "./FriendsList/friendsList";

const Friends = (props) => {
    return (
        <div>
            <ul>
                <div><NavLink activeClassName={s.active} className={s.first} to="/Friends">Friends</NavLink></div>
                <FriendsList nameFriend={props.nameFriend}/>
            </ul>
        </div>
    );
};


export default Friends