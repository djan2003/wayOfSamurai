import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/Dialogs"
import Music from "./components/Music/Music";
import Others from "./components/Others/Others";
import {BrowserRouter, Route} from "react-router-dom";
import ProfileInfo from "./components/Profile/ProfileInfo/profileInfo";
import {addPost, updateNewMessage, updateNewPost} from "./redux/state";

const App = (props) => {

    return (
        < BrowserRouter >
        < section
    className = "app-wrapper" >
        < Header / >
        < Nav
    nameFriend = {props.state.friends.nameFriend}
    />
    < div
    className = "app-wrapper-content" >
        < Route
    path = "/Profile"
    render = {()=><
    Profile
    dispatch = {props.dispatch}
    newPostText = {props.state.profilePage.newPostText}
    message = {props.state.profilePage.message}
    /> } / >
    < Route
    path = "/Dialogs"
    render = {()=><
    Dialogs
    newMessageText = {props.state.dialogsPage.newMessageText}
    dispatch = {props.dispatch}
    dialogsData = {props.state.dialogsPage.dialogsData}
    messageData = {props.state.dialogsPage.messageData}
    /> }  / >
    < Route
    path = "/Music"
    component = {Music}
    />
    < Route
    path = "/Others"
    component = {Others}
    />
    < /div>
    < /section>
    < /BrowserRouter>
)
    ;
};


export default App;
