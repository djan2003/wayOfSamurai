import React from 'react';
import s from './friendsList.module.css';
import {NavLink} from "react-router-dom";

const FriendsItem = (props) => {
    let path = "/Friends/" + props.id;
    return (

        <div className={s.link}>
            <NavLink className={s.link} to={path}> {props.name}</NavLink>
        </div>
    )
}


const FriendsList = (props) => {
    let friendsNameElement = props.nameFriend.map(f => <FriendsItem name= {f.name} id={f.id}/>)
    return (
        <div>
            <ul>
                <div className={s.threeFriend}>
                    {friendsNameElement}
                </div>
            </ul>
        </div>
    );
};


export default FriendsList