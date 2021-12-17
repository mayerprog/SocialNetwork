//вопрос - почему нам пришлось писать этот импорт? без него вылезает ошибка Error : 'React' must be in scope when using JSX react/react-in-jsx-scope
//при этом до внедрения редакса и без этого импорта все работало.
import React, { Component }  from 'react';
//параметр по умолчанию, присваиваем к state, если state не передан
//а state и так нет при первой инициализации
let initialState = {
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

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;