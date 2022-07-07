import React from "react"; //импортируем react(библиотека) из папки node_modules, мы импортируем React из библиотеки
import "./App.css"; //импортируем файл css
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";
import MessagesContainer from "./components/Dialogues/Messages/MessagesContainer";
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
                           render={() => <Profile />}/>
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
