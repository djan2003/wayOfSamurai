import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";
import {updateNewPost} from "../../redux/state";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch} newPostText={props.newPostText}
                     message={props.message}/>
        </div>
    );
};


export default Profile