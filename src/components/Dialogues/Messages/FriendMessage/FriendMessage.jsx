import React from 'react'
import di from '../../Dialogues.module.css'

const FriendMessage = (props) => {

    return (
        <div className={di.messages}>
            <div>
                {props.message}
            </div>
        </div>
    )
}

export default FriendMessage;