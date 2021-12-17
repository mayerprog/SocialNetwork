const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

//параметр по умолчанию, присваиваем к state, если state не передан
//а state и так нет при первой инициализации
let initialState = {
    postsData: [
        {id: 1, likescount: 1, message: 'hey, wassup!'},
        {id: 2, likescount: 2, message: 'I\'m a dumb'},
        {id: 3, likescount: 3, message: 'I need some hugs'},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likescount: 5
            };
            state.postsData.push(newPost);
            state.newPostText = '';

            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;

            return state
        //Если action, пришедший из UI, не касается данного редьюсера
        default:
            return state

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text})

window.updateNewPostTextActionCreator = updateNewPostTextActionCreator;

export default profileReducer;