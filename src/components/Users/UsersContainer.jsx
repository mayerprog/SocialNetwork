import axios from "axios";
import React from "react";
import connect from "react-redux/lib/connect/connect";
import { follow, unfollow, setUsers, setPage, setCount, toggleIsFetching, toggleIsFollowing } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import { usersAPI } from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setCount(data.totalCount)
        })
    }

    onPageClick = (pageNumber) => {
        this.props.setPage(pageNumber) //переданный номер странички e нужно передать в гет запрос обязательно,
        //т.к. если там останется currentPage, он возьмется из старых пропсов, this.props.setPage(e) успеет 
        //передать значение в state только после завершения всего цикла!
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
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
                    followingUnfollowingInProgress={this.props.followingUnfollowingInProgress}
                    toggleIsFollowing={this.props.toggleIsFollowing}

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
        followingUnfollowingInProgress: state.usersPage.followingUnfollowingInProgress
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => dispatch(follow(userId)),
//         unfollow: (userId) => dispatch(unfollow(userId)),
//         setUsers: (users) => dispatch(setUsers(users)),
//         setPage: (page) => dispatch(setPage(page)),
//         setCount: (totalCount) => dispatch(setCount(totalCount)),
//         toggleIsFetching: (isFetching) => dispatch(toggleIsFetching(isFetching)),
//     }
// }

export default connect(mapStateToProps, {follow, unfollow, setUsers, setPage, 
                                        setCount, toggleIsFetching, toggleIsFollowing})(UsersContainer)
