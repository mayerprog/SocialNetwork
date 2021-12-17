import profileReducer from "./profile-reducer";
import dialogueReducer from "./dialogue-reducer";
import sidebarReducer from "./sidebar-reducer";
import {combineReducers, createStore} from "redux";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialogueReducer,
    sideBarPage: sidebarReducer
})

const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;
