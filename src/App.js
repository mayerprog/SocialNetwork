import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css"; //импортируем файл css
import MessagesContainer from "./components/Dialogues/Messages/MessagesContainer";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";




const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route exact path='/dialogues'
                           render={() => <MessagesContainer />}/>
                    <Route path='/profile'
                           render={() => <ProfileContainer />}/>
                    <Route path='/users'
                           render={() => <UsersContainer />}/>
                    <Route path='/music'
                           render={() => <Music/>}/>
                    <Route path='/settings'
                           render={() => <Settings/>}/>
                    <Route path='/news'
                           render={() => <News/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
};


export default App; //экспортируем функцию App
