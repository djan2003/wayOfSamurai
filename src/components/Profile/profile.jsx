import React from 'react';
import ProfileInfo from "./ProfileInfo/profileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsConteiner store = {props.store}/>
        </div>
    );
};


export default Profile