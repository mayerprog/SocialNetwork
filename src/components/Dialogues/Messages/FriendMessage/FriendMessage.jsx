import React from 'react'
import di from '../../Dialogues.module.css'

const FriendMessage = (props) => {

    return (
        <div className={di.message}>
            <div>
                {props.message}
            </div>
        </div>
    )
}

export default FriendMessage;