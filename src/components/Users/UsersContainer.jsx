import React from "react";
import Users from "./Users";
import connect from "react-redux/lib/connect/connect";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/users-reducer";

const mapStateToProps = (state) => { //запускается каждый раз, когда в стейте происходят какие-то изменения
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followActionCreator(userId)),
        unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users))
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer