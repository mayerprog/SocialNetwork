const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

//параметр по умолчанию, присваиваем к state, если state не передан
//а state и так нет при первой инициализации
let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
             return {
                 ...state, //делаем поверхностное копирование state
                 users: state.users.map(u => { //перезатираем users в initialState
                     if (u.id === action.userId) {
                         return {...u, followed: true} //делаем глубокое копирование для перезатирания значения ключа followed
                     }
                     return u
                 })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
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