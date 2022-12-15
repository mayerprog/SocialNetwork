import { usersAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
             return {
                ...state,
                ...action.data, //стирает все null и перезаписывает новые значения
                isAuth: true
            };

        default:
            return state
    }
}

export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})

export const getLoginData = () => (dispatch) => {
    usersAPI.getLogin()
      .then(data => {
        if (data.resultCode === 0) {
          let {email, id, login} = data.data
          dispatch(setUserData(id, email, login))
        }
      })
}

export default authReducer;