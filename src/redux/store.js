import React from "react";
import profileReducer from "./profile-reducer";
import dialogueReducer from "./dialogue-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _subscriber() {
        console.log('State has been changed')
    },
    _state: {
        profilePage: {
            postsData: [
                {id: 1, likescount: 1, message: 'hey, wassup!'},
                {id: 2, likescount: 2, message: 'I\'m a dumb'},
                {id: 3, likescount: 3, message: 'I need some hugs'},
            ],
            newPostText: ''
        },
        dialoguesPage: {
            dialoguesData: [
                {id: 1, name: 'Mayra'},
                {id: 2, name: 'Alex'},
                {id: 3, name: 'Marc'},
                {id: 4, name: 'Lera'},
                {id: 5, name: 'Nastya'}
            ],
            messagesData: [
                {id: 1, message: 'Hey'},
                {id: 2, message: 'What\'s up?'},
                {id: 3, message: 'You cute'},
                {id: 4, message: 'Send me a nice meme'}
            ],
            newMessageText: ''
        },
        sideBarPage: {
            friendData: [
                {
                    id: 1,
                    name: 'Myra',
                    pic: <img src="https://i.pinimg.com/originals/d1/cf/62/d1cf6294a3f560bb63f42367810b1d32.jpg"
                              width="60" height="60"/>
                },
                {
                    id: 2,
                    name: 'Vika',
                    pic: <img src="https://i.pinimg.com/236x/e6/0f/1a/e60f1ac52ad4f1f3354864962b6360fa.jpg" width="60"
                              height="60"/>
                },
                {
                    id: 3,
                    name: 'Lera',
                    pic: <img src="https://i.pinimg.com/564x/54/dd/7c/54dd7cd16f5fb388cf7f85d40900fc24.jpg" width="60"
                              height="60"/>
                },
            ]
        }
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer; //observer - это наблюдатель, это паттерн // publisher-subscriber
    }, //вызвали мы эту функцию еще в индекс.джс при первом самом рендере, то есть сразу определили, чем равен rerenderEntireTree.

    dispatch: function (action) {
        // изменяет state посредством присваивания свойствам _state новых значений
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialoguesPage = dialogueReducer(this._state.dialoguesPage, action);
        this._state.sideBarPage = sidebarReducer(this._state.sideBarPage, action);

        this._subscriber()

    }
}


window.store = store;


export default store;
