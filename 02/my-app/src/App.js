import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/Dialogs"
import Music from "./components/Music/Music";
import Others from "./components/Others/Others";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <section className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/Profile" component= {Profile} />
                    <Route  path="/Dialogs" component= {Dialogs} />
                    <Route path="/Music" component= {Music} />
                    <Route  path="/Others" component= {Others} />
                </div>
            </section>
        </BrowserRouter>
    );
};


export default App;
