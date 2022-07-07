const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const IS_FETCHING = 'IS_FETCHING'


//параметр по умолчанию, присваиваем к state, если state не передан
//а state и так нет при первой инициализации
let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, //делаем поверхностное копирование state
                users: state.users.map(u => { //перезатираем users в initialState
                    if (u.id === action.userId) {
                        return { ...u, followed: true } //делаем глубокое копирование для перезатирания значения ключа followed
                    }
                    return u
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case IS_FETCHING: 
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId })
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })
export const setPageActionCreator = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalCountActionCreator = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const isFetchingActionCreator = (isFetching) => ({ type: IS_FETCHING, isFetching })


export default usersReducer;