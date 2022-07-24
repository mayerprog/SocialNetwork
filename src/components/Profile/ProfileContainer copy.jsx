import axios from "axios";
import React, { useEffect, useState } from "react";
import connect from "react-redux/lib/connect/connect";
import { useParams } from "react-router-dom";
import Profile from "./Profile";


const ProfileContainerCopy = (props) => {

    let state = props.store.getState().profilePage;

    const initialProfile = state.profile

    const [profile, setProfile] = useState(initialProfile)

    const { userId } = useParams();

    useEffect(async () => {
        const result = await axios(
            `https://social-network.samuraijs.com/api/1.0/profile/` + userId
            );

        setProfile(result.data)
    })

    return (
        <Profile profilePage={state} />
    )
}

// const mapStateToProps = (state) => ({
//     profilePage: state.profilePage
// })


export default ProfileContainerCopy