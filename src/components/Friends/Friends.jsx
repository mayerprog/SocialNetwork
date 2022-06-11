import React from 'react'
import f from './Friends.module.css'
import Dude from "./Dude/Dude";

const Friends = (props) => {
    let friendsElems = props.sideBarPage.friendData
        .map(f => <Dude name={f.name} key={f.id} id={f.id} pic={f.pic}/>)
/*
    на основе пропсов создается jsx тег Dude
*/
    return (
        <div className={f.item}>
            Friends
            {friendsElems}
        </div>
    )
}

export default Friends;

