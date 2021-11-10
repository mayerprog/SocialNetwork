import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

let rerenderEntireTree = (state) => { //передаем state
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    ); //рендерит функцию App и передается в root, который находится в практически пустом index.html
}

rerenderEntireTree(store.getState()); //для самого первоначального рендеринга, когда только запускается страничка

store.subscribe(rerenderEntireTree); // вызываем из того мира (state) функцию subscribe и передаем тому миру функцию коллбэк rerenderEntireTree через параметр
//отдаем функцию, чтобы кто-то ее вызвал. То есть мы на этапе первого самого рендера определили, чему в файле state равна функция _subscriber

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
