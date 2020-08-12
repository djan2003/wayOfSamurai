import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/Dialogs"
import Music from "./components/Music/Music";
import Others from "./components/Others/Others";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        < BrowserRouter >
        < section
    className = "app-wrapper" >
        < Header / >
        < Nav store = {props.store}
   // nameFriend = {props.state.friends.nameFriend}
    />
    < div
    className = "app-wrapper-content" >
        < Route
    path = "/Profile"
    render = {() => <
    Profile
    store = {props.store}
    /> } / >
    < Route
    path = "/Dialogs"
    render = {() => <
    DialogsContainer
    store = {props.store}
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
