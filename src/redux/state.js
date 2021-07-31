import React from "react";

let rerenderEntireTree = () => {
    console.log('State has been changed')
}

let state = {
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
            {id: 1, name: 'Myra', pic: <img src="https://i.pinimg.com/originals/d1/cf/62/d1cf6294a3f560bb63f42367810b1d32.jpg" width="60" height="60"/>},
            {id: 2, name: 'Vika', pic: <img src="https://www.meme-arsenal.com/memes/1f09e64d30efeef27435f9e55286c6ae.jpg" width="60" height="60"/>},
            {id: 3, name: 'Lera', pic: <img src="https://i.pinimg.com/564x/54/dd/7c/54dd7cd16f5fb388cf7f85d40900fc24.jpg" width="60" height="60"/>},
        ]
    }
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likescount: 5
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state); //в Redux мы ничего не передаем в observer обычно
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state); //в Redux мы ничего не передаем в observer обычно
}

export const addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialoguesPage.newMessageText,
    };
    state.dialoguesPage.messagesData.push(newMessage);
    state.dialoguesPage.newMessageText = '';
    rerenderEntireTree(state); //в Redux мы ничего не передаем в observer обычно
}

export const updateNewMessageText = (newText) => {
    state.dialoguesPage.newMessageText = newText;
    rerenderEntireTree(state); //в Redux мы ничего не передаем в observer обычно
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; //observer - это наблюдатель, это паттерн // publisher-subscriber
}

export default state;