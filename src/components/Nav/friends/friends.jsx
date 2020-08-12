import React from 'react';
import s from './friends.module.css';
import {NavLink} from "react-router-dom";
import FriendsList from "./FriendsList/friendsList";
import FriendListConteiner from "./FriendsList/friendsListContainer";

const Friends = (props) => {
    return (
        <div>
            <ul>
                <div><NavLink activeClassName={s.active} className={s.first} to="/Friends">Friends</NavLink></div>
                <FriendListConteiner nameFriend={props.nameFriend}/>
            </ul>
        </div>
    );
};


export default Friends