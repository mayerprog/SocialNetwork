import axios from "axios";
import React from "react";
import connect from "react-redux/lib/connect/connect";
import { setPage, getUsers, unfollowUsers, followUsers} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageClick = (pageNumber) => {
        this.props.setPage(pageNumber) 
        this.props.getUsers(pageNumber, this.props.pageSize)

    }
    render() {
        return <>
            {this.props.isFetching ?
                <Preloader /> :
                <Users onPageClick={this.onPageClick}
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    followingUnfollowingInProgress={this.props.followingUnfollowingInProgress}
                    unfollowUsers={this.props.unfollowUsers}
                    followUsers={this.props.followUsers}
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

export default compose(connect(mapStateToProps, { setPage, 
    getUsers, unfollowUsers, followUsers}), withAuthRedirect)(UsersContainer)

