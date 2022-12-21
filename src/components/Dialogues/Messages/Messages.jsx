import React from 'react'
import di from './../Dialogues.module.css'
import FriendMessage from "./FriendMessage/FriendMessage";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogue-reducer";
import DialogueItem from "../DialogueItem/DialoguesItem";
import { Navigate } from 'react-router-dom';


const Message = (props) => {
    let state = props.dialoguesPage
    let dialoguesElements = state.dialoguesData
        .map(d => <DialogueItem name={d.name} key={d.id} id={d.id}/>);
    let messagesData = state.messagesData
        .map(m => <FriendMessage message={m.message} key={m.id} id={m.id}/>);

    let onAddMessage = () => {
        props.addMessage();
    }

    let messageOnChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text)
    }

    // if (!props.isAuth) return <Navigate to='/login' />

    return (
        <div className={di.dialogues}>
            <div className={di.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div>
                <div className={di.messages}>
                    {messagesData} {/*т.к. это джаваскриптовый элемент, заключаем его в фигурные скобки*/}
                </div>
                <div>
                    <textarea value={state.newMessageText} placeholder={"Enter your message"}
                              onChange={messageOnChange}/>
                </div>
                <div>
                    <button onClick={onAddMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Message;