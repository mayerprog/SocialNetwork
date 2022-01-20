const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

//параметр по умолчанию, присваиваем к state, если state не передан
//а state и так нет при первой инициализации
let initialState = {
    users: [
        {id: 1, photoURL: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/2c94a5f1-ad03-414c-b015-7e6293d4f6e5/360', fullName: 'Mayra', followed: true, status: 'Everything will be ok', location: {country: 'Russia', cityName: 'Moscow'}},
        {id: 2, photoURL: 'https://www.vokrug.tv/pic/person/3/3/a/5/33a5e8c64dc0beff33e88fd8c1376d97.jpeg', fullName: 'Nastya', followed: false, status: 'I love money', location: {country: 'Russia', cityName: 'Chelyabinsk'}},
        {id: 3, photoURL: 'https://www.sberbank.com/common/img/uploaded/_new_site/com/executive-board/gref-1.jpg', fullName: 'German', followed: false, status: 'UK Drill for life', location: {country: 'Russia', cityName: 'Moscow'}},
        {id: 4, photoURL: 'https://www.vokrug.tv/pic/person/0/2/2/f/022fbee2cb413e4ecc0270dc7e41031a.jpeg', fullName: 'Kolya', followed: true, status: 'Call me Yura', location: {country: 'The USA', cityName: 'New York'}},
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
             return {
                 ...state, //делаем поверхностное копирование state
                 users: state.users.map(u => { //перезатираем users в initialState
                     if (u.id === action.userId) {
                         return {...u, followed: true} //поверхностная копия элемента users + перезатирание значения ключа followed
                     }
                     return {...u}
                 })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return {...u}
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users] //берем старых юзеров и добавляем к ним новых юзеров (по аналогии с 34 строчкой dialogue-reducer.
        }
        default:
            return state
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})


export default usersReducer;