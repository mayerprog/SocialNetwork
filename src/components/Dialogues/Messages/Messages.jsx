import React from 'react'
import di from './../Dialogues.module.css'
import FriendMessage from "./FriendMessage/FriendMessage";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogue-reducer";


const Message = (props) => {
    let messagesData = props.messagesData
        .map(m => <FriendMessage message={m.message} id={m.id}/>);

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let messageOnChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <div className={di.message}>
            <div>{messagesData}</div>
            <div>
                <div>
                    <textarea value={props.newMessageText} placeholder={"Enter your message"} onChange={messageOnChange}/>
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Message;