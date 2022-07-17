import React from 'react'
import di from './../Dialogues.module.css'
import {NavLink} from "react-router-dom";

const DialogueItem = (props) => {
    return (
        <div className={di.dialoguesItems + ' ' + di.active}>
            <NavLink to={"/dialogues/" + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogueItem;