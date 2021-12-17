import React from 'react'
import di from './Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialoguesItem";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogues = (props) => {
    debugger;
    return (
        <div className={di.dialogues}>
            <div> <MessagesContainer store={props.store}/> </div>
        </div>
    )
}

export default Dialogues;