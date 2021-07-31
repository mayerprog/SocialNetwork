import React from 'react'
import f from './Dude.module.css'

const Dude = (props) => {
    return (
        <div>
            <div className={f.item}>
                {props.name}
                {props.pic}
            </div>
        </div>
    )
}

export default Dude;