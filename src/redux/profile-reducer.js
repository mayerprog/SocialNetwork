import { authAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';

//параметр по умолчанию, присваиваем к state, если state не передан
//а state и так нет при первой инициализации
let initialState = {
    postsData: [
        {id: 1, likescount: 1, message: 'hey, wassup!'},
        {id: 2, likescount: 2, message: 'I\'m a dumb'},
        {id: 3, likescount: 3, message: 'I need some hugs'},
    ],
    newPostText: '',
    profile: null
}

const 

profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText, // в данном случае state - это не initialState, это state
                //возвращенный после выполнения action UPDATE_NEW_POST_TEXT. Возвращаемый state всегда сохраняется в store
                // поэтому initialState работает только при самом первом запуске редьюсера.
                likescount: 5
            };
            return {
                ...state, //делаем поверхностное копирование
                newPostText: '',
                postsData: [...state.postsData, newPost] //глубоко копируем postsData + добавляем(пушим) еще один объект в массив
            };
            //stateCopy.postsData.push(newPost);
            //stateCopy.newPostText = '';

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text //делаем поверхностное копирование + сразу присваиваем newPostText новое значение
            } //делаем поверхностное копирование
            //stateCopy.newPostText = action.text;

        case SET_PROFILE:
            return {
                ...state,
                profile: action.profileData
            }

        default: //Если action, пришедший из UI, не касается данного редьюсера
            return state

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text})
export const setProfile = (profileData) => ({type: SET_PROFILE, profileData})

export const getProfileDetails = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
    .then(data => {
        dispatch(setProfile(data))
    })
}


window.updateNewPostTextActionCreator = updateNewPostTextActionCreator;

export default profileReducer;