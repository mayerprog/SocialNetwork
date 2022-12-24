import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const IS_FETCHING = 'IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


//параметр по умолчанию, присваиваем к state, если state не передан
//а state и так нет при первой инициализации
let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingUnfollowingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, //делаем поверхностное копирование state, полностью перезаписываем state
                users: state.users.map(u => { //перезатираем users в state
                    if (u.id === action.userId) {
                        return { ...u, followed: true } //делаем глубокое копирование для перезатирания значения ключа followed
                        //если не сделаем глубокое копирование users, то изменится users в initialState, т.к. было проделано до этого
                        //только поверхностное копирование ...state. Изменять первоначальный state нельзя.
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingUnfollowingInProgress: action.isFetching
                    ? [...state.followingUnfollowingInProgress, action.userId]
                    : state.followingUnfollowingInProgress.filter(id => id != action.userId) //убирает id, равные action.userId
            }
        default:
            return state
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: IS_FETCHING, isFetching })
export const toggleIsFollowing = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsers = (currentPage, pageSize) => { // родительская функция, аргументы,переданные в нее, доступны в дочерней функции
    return (dispatch) => { // дочерняя замыкающая функция
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setCount(data.totalCount))
        })
    }

}

export const unfollowUsers = (userId) => (dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    usersAPI.deleteUnfollow(userId)
        .then(data => {
            if (data.resultCode == 0) {
                dispatch(unfollow(userId))
            }
            dispatch(toggleIsFollowing(false, userId))
        })
}
export const followUsers = (userId) => (dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    usersAPI.postFollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(toggleIsFollowing(false, userId))
        })
}


export default usersReducer;