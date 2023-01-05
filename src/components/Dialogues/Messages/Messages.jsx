import React from 'react'
import di from './../Dialogues.module.css'
import FriendMessage from "./FriendMessage/FriendMessage";
import DialogueItem from "../DialogueItem/DialoguesItem";
import { Form, Field } from 'react-final-form'


const Message = (props) => {
    let state = props.dialoguesPage
    let dialoguesElements = state.dialoguesData
        .map(d => <DialogueItem name={d.name} key={d.id} id={d.id} />);
    let messagesData = state.messagesData
        .map(m => <FriendMessage message={m.message} key={m.id} id={m.id} />);

    let onAddMessage = (values) => {
        props.addMessage(values.newMessageText);
    }

    return (
        <div className={di.dialogues}>
            <div className={di.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div>
                <div className={di.messages}>
                    {messagesData}
                </div>
                <Form
                    onSubmit={onAddMessage}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Field
                                    name="newMessageText"
                                    component="textarea"
                                    placeholder="Enter your message"
                                    type="text"
                                />
                            </div>
                            <div>
                                <button>Send</button>
                            </div>
                        </form>
                    )}
                />
            </div>
        </div>
    )
}

export default Message;