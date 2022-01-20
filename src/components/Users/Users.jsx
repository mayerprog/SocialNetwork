import React from "react";
import style from './Users.module.css'


const Users = (props) => {
    return <div className={style.users}>
        {
            props.users.map(u => <div key={u.id} >
                <div>
                    <div> <img src={u.photoURL}/> </div>
                    <div> <button></button></div>
                </div>
                <div>
                    <div>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{u.location.country}</div>
                        <div>{u.location.cityName}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users