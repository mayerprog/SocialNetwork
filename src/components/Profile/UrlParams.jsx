import React from "react";
import connect from "react-redux/lib/connect/connect";
import Profile from "./Profile";
import { getProfileDetails, getStatus, updateStatus } from "../../redux/profile-reducer";
import { Navigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

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
            userId = 22090;
        }
        this.props.getProfileDetails(userId)
        this.props.getStatus(userId)
    }

    render() {
        
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} 
                                    updateStatus={this.props.updateStatus}/>
        )

    }

};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(withAuthRedirect, connect(mapStateToProps, { getProfileDetails, getStatus, updateStatus }))(UrlParams)
