import React from 'react'
import di from './Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialoguesItem";
import Message from "./Messages/Messages";

const Dialogues = (props) => {

    let dialoguesElements = props.dialoguesPage.dialoguesData
        .map(d => <DialogueItem name={d.name} id={d.id}/>);


    return (
        <div className={di.dialogues}>
            <div className={di.dialoguesItems}>
                {dialoguesElements} {/*т.к. это джаваскриптовый элемент, заключаем его в фигурные скобки*/}
            </div>
            <Message dialoguesPage={props.dialoguesPage}
                     addMessage={props.addMessage}
                     updateNewMessageText={props.updateNewMessageText}
                     newMessageText={props.dialoguesPage.newMessageText}/>
        </div>
    )
}

export default Dialogues;