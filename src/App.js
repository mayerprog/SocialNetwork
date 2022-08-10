import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css"; //импортируем файл css
import MessagesContainer from "./components/Dialogues/Messages/MessagesContainer";
import Header from "./components/Header/Header";
import HeaderContainer from "./components/Header/HeaderContainer";
import Music from "./components/Music/Music";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/UrlParams";
import UrlParams from "./components/Profile/UrlParams";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";




const App = (props) => {
       return (
              <div className="app-wrapper">
                     <HeaderContainer />
                     <NavBar />
                     <div className="app-wrapper-content">
                            <Routes>
                                   <Route exact path='/dialogues'
                                          element={<MessagesContainer />} />
                                   <Route path='/profile/:userId'
                                          element={<UrlParams />} />
                                   <Route path='/profile/'
                                          element={<UrlParams />} />
                                   <Route path='/users'
                                          element={<UsersContainer />} />
                                   <Route path='/music'
                                          element={<Music />} />
                                   <Route path='/settings'
                                          element={<Settings />} />
                                   <Route path='/news'
                                          element={<News />} />
                            </Routes>
                     </div>
              </div>
       );
};


export default App; //экспортируем функцию App
