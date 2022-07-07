import axios from "axios";
import React from "react";
import connect from "react-redux/lib/connect/connect";
import { followActionCreator, setPageActionCreator, setTotalCountActionCreator, setUsersActionCreator, unfollowActionCreator, isFetchingActionCreator } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setCount(response.data.totalCount)
        })
    }

    onPageClick = (e) => {
        this.props.setPage(e) //переданный номер странички e нужно передать в гет запрос обязательно,
        //т.к. если там останется currentPage, он возьмется из старых пропсов, this.props.setPage(e) успеет 
        //передать значение в state только после завершения всего цикла!
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${e}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })

    }
    // onPageChanged= {() => {this.onPageChanged}}
    render() {
        return <>
            {this.props.isFetching ?
                <Preloader /> :
                <Users onPageClick={this.onPageClick}
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />}
        </>

    }
}

const mapStateToProps = (state) => { //запускается каждый раз, когда в стейте происходят какие-то изменения
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followActionCreator(userId)),
        unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        setPage: (page) => dispatch(setPageActionCreator(page)),
        setCount: (totalCount) => dispatch(setTotalCountActionCreator(totalCount)),
        toggleIsFetching: (isFetching) => dispatch(isFetchingActionCreator(isFetching)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
