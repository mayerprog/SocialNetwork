import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogue-reducer";
import Messages from "./Messages";
import connect from "react-redux/lib/connect/connect";

/*const MessagesContainer = (props) => {
    let state = props.store.getState().dialoguesPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let messageOnChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <Messages addMessage={addMessage}
                  updateNewMessageText={messageOnChange}
                  dialoguesPage={state}
        />
    )
}*/

const mapStateToProps = (state) => { //запускается каждый раз, когда в стейте происходят какие-то изменения
    return {
        dialoguesPage: state.dialoguesPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        updateNewMessageText: (text) => dispatch(updateNewMessageTextActionCreator(text)),
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages) // коннектим презентационную компоненту Messages к state и dispatch
//теперь коннект отвечает за ререндер(перерисовку компонентов).
// Каждый раз, когда в стейте происходят изменения, запускается mapStateToProps, что позволяет рендерить не всё дерево, а определенные его части.


export default MessagesContainer;