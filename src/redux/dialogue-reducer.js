const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

//параметр по умолчанию, присваиваем к state, если state не передан
//а state и так нет при первой инициализации
let initialState = {
    dialoguesData: [
        {id: 1, name: 'Mayra'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Marc'},
        {id: 4, name: 'Lera'},
        {id: 5, name: 'Nastya'}
    ],
    messagesData: [
        {id: 1, message: 'Hey'},
        {id: 2, message: 'What\'s up?'},
        {id: 3, message: 'You cute'},
        {id: 4, message: 'Send me a nice meme'}
    ],
    newMessageText: ''
}

const dialogueReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageText // в переменную попало то значение, которое еще было присвоено
            //на этапе выполнения функции updateNewMessageTextActionCreator (ввод сообщения в textarea)
            state.newMessageText = ''; //вот тут мы обнуляем то, что было введено в textarea, при этом это никак не отражается на body
            let newMessage = {
                id: 5,
                message: body,
            };
            state.messagesData.push(newMessage);

            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;

            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text})

export default dialogueReducer;