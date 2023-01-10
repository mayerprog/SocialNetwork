import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'

let initialState = {
    postsData: [
        {id: 1, likescount: 1, message: 'hey, wassup!'},
        {id: 2, likescount: 2, message: 'I\'m a dumb'},
        {id: 3, likescount: 3, message: 'I need some hugs'},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.post, // в данном случае state - это не initialState, это state
                //возвращенный после выполнения action UPDATE_NEW_POST_TEXT. Возвращаемый state всегда сохраняется в store
                // поэтому initialState работает только при самом первом запуске редьюсера.
                likescount: 5
            };
            return {
                ...state, //делаем поверхностное копирование
                postsData: [...state.postsData, newPost] //глубоко копируем postsData + добавляем(пушим) еще один объект в массив
            };
            //stateCopy.postsData.push(newPost);
            //stateCopy.newPostText = '';

        case SET_PROFILE:
            return {
                ...state,
                profile: action.profileData
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.profileStatus
            }

        default: //Если action, пришедший из UI, не касается данного редьюсера
            return state

    }
}

export const addPostActionCreator = (post) => ({type: ADD_POST, post})

export const setProfile = (profileData) => ({type: SET_PROFILE, profileData})
export const setProfileStatus = (profileStatus) => ({type: SET_PROFILE_STATUS, profileStatus})

export const getProfileDetails = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
    .then(data => {
        dispatch(setProfile(data))
    })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getProfileStatus(userId)
    .then(data => {
        dispatch(setProfileStatus(data))
    })
}

export const updateStatus = (profileStatus) => (dispatch) => {
    profileAPI.updateProfileStatus(profileStatus)
    .then(data => {
        if(data.resultCode === 0){
            dispatch(setProfileStatus(profileStatus))
        }
    })
}


export default profileReducer;