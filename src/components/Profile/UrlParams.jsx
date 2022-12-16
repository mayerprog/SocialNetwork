import axios from "axios";
import React from "react";
import connect from "react-redux/lib/connect/connect";
import Profile from "./Profile";
import { getProfileDetails } from "../../redux/profile-reducer";
import { Navigate, useParams } from "react-router-dom";

let UrlParams = (props) => {
    const match = { params: useParams() };
    return <div>
        <ProfileContainer {...props} match={match} />
    </div>
}

export class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        this.props.getProfileDetails(userId)
    }

    render() {
        if (!this.props.isAuth) return <Navigate to='/login' />
        
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )

    }

};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { getProfileDetails })(UrlParams);
