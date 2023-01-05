const ADD_MESSAGE = "ADD-MESSAGE";

//параметр по умолчанию, присваиваем к state, если state не передан
let initialState = {
  dialoguesData: [
    { id: 1, name: "Mayra" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Marc" },
    { id: 4, name: "Lera" },
    { id: 5, name: "Nastya" },
  ],
  messagesData: [
    { id: 1, message: "Hey" },
    { id: 2, message: "What's up?" },
    { id: 3, message: "You cute" },
    { id: 4, message: "Send me a nice meme" },
  ],
};

const dialogueReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let body = action.message;
      let newMessage = {
        id: 5,
        message: body,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: "",
      }; // делаем поверхностную копию объекта state

    default:
      return state;
  }
};

export const addMessageActionCreator = (message) => ({
  type: ADD_MESSAGE,
  message,
});

export default dialogueReducer;
