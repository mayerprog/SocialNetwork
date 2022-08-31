import React from "react";
import style from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p && style.chosenPage}
                        onClick={() => { props.onPageClick(p) }}> {p} </span>
                })
            }
        </div>
        {
            props.users.map(u => <div key={u.id} className={style.users}>
                <div>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div> {u.followed
                        ? <button disabled={props.followingUnfollowingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.toggleIsFollowing(true, u.id)
                                usersAPI.deleteUnfollow(u.id)
                                    .then(data => {
                                        if (data.resultCode == 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleIsFollowing(false, u.id)

                                    })
                            }}> Unfollow </button>
                        : <button disabled={props.followingUnfollowingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.toggleIsFollowing(true, u.id)
                                usersAPI.postFollow(u.id)
                                    .then(data => {
                                        if (data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleIsFollowing(false, u.id)
                                    })
                            }}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.cityName"}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users