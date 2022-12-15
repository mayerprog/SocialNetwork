import profileReducer from "./profile-reducer";
import dialogueReducer from "./dialogue-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";


let reducers = combineReducers({
    profilePage: profileReducer, //редьюсер - это по сути возвращаемый объект с данными, а profilePage - ключ этого свойства
    dialoguesPage: dialogueReducer,
    sideBarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

const store = createStore(reducers, applyMiddleware(thunk));


window.store = store;

export default store;

