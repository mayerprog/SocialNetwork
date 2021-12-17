import React from 'react'
import Friends from "./Friends";
import connect from "react-redux/lib/connect/connect";

const mapStateToProps = (state) => {
    return {
        sideBarPage: state.sideBarPage
    }
}

const MyFriendsContainer = connect(mapStateToProps)(Friends)

export default MyFriendsContainer;

