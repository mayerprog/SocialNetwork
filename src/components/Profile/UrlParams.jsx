import axios from "axios";
import React from "react";
import connect from "react-redux/lib/connect/connect";
import Profile from "./Profile";
import { getProfileDetails } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";

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
            userId = 10;
        }
        this.props.getProfileDetails(userId)
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )

    }

};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, { getProfileDetails })(UrlParams);
