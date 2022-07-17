import axios from "axios";
import React from "react";
import connect from "react-redux/lib/connect/connect";
import Profile from "./Profile";
import {setProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setProfile(response.data)
        })
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

export default connect (mapStateToProps, {setProfile})(ProfileContainer);
