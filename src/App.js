import React from "react"; //импортируем react(библиотека) из папки node_modules, мы импортируем React из библиотеки
import "./App.css"; //импортируем файл css
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar data={props.state.sideBarPage}/>
                <div className="app-wrapper-content">
                    <Route exact path='/dialogues'
                           render={() => <Dialogues
                               dialoguesPage={props.state.dialoguesPage}
                               dialoguesPage={props.state.dialoguesPage}
                               addMessage={props.addMessage}
                               updateNewMessageText={props.updateNewMessageText}/>}/>
                    <Route path='/profile'
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               addPost={props.addPost}
                               updateNewPostText={props.updateNewPostText}/>}/>
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
