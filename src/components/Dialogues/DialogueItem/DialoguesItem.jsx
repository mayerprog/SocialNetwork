import React from 'react'
import di from './../Dialogues.module.css'
import {NavLink} from "react-router-dom";

const DialogueItem = (props) => {
    let path = "/dialogues/" + props.id;
    return (
        <div className={di.dialoguesItems + ' ' + di.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogueItem;