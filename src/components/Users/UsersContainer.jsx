import axios from "axios";
import React from "react";
import connect from "react-redux/lib/connect/connect";
import { followActionCreator, setPageActionCreator, setTotalCountActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setCount(response.data.totalCount)
        })
    }

    onPageClick = (e) => {
        this.props.setPage(e) //переданный номер странички e нужно передать в гет запрос обязательно,
        //т.к. если там останется currentPage, он возьмется из старых пропсов, this.props.setPage(e) успеет 
        //передать значение в state только после завершения всего цикла!
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${e}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    // onPageChanged= {() => {this.onPageChanged}}
    render() {
        return <Users onPageClick={this.onPageClick}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />

    }
}

const mapStateToProps = (state) => { //запускается каждый раз, когда в стейте происходят какие-то изменения
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followActionCreator(userId)),
        unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        setPage: (page) => dispatch(setPageActionCreator(page)),
        setCount: (totalCount) => dispatch(setTotalCountActionCreator(totalCount)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
