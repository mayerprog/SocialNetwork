import React from 'react'
import di from './Dialogues.module.css'
import {NavLink} from "react-router-dom";

const DialogueItem = (props) => {
    let path="/dialogues/" + props.id;
    return (
    <div className={di.dialogue + ' ' + di.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}

const Message = (props) => {
    return (
        <div className={di.message}>{props.message}</div>
    )
}

const Dialogues = (props) => {
    return (
        <div className={di.dialogues}>
            <div className={di.dialoguesItems}>
                <DialogueItem name="Mayra" id="1"/>
                <DialogueItem name="Alex" id="2"/>
                <DialogueItem name="Marc" id="3"/>
                <DialogueItem name="Lera" id="4"/>
                <DialogueItem name="Nastya" id="5"/>
            </div>
            <div className={di.messages}>
                <Message message="Hey"/>
                <Message message="What's up?"/>
                <Message message="You cute"/>
            </div>
        </div>
    )
}

export default Dialogues;