import React from 'react'
import di from './../Dialogues.module.css'
import FriendMessage from "./FriendMessage/FriendMessage";

const Message = (props) => {
    let messagesData = props.dialoguesPage.messagesData
        .map(m => <FriendMessage message={m.message} id={m.id}/>);

    let newPostMessage = React.createRef();
    let addMessage = () => {
        props.addMessage();
    }
    let messageOnChange = () => {
        let text = newPostMessage.current.value;
        props.updateNewMessageText(text)
    }

    return (
        <div className={di.message}>
            <div>
                <div>
                    <textarea ref={newPostMessage} value={props.newMessageText} onChange={messageOnChange}/>
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
            <div>{messagesData}</div>
        </div>
    )
}

export default Message;