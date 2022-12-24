import React from "react";
import { connect } from "react-redux";
import Preloader from "../../common/Preloader";
import prIn from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) { //(props.profile == null || props.profile == undefined)
        return <Preloader />
    }
    return (
        <div>
            <div className={prIn.descriptionBlock}>
                <div><img src={props.profile.photos.large} /></div>
                {/* <span>{props.profile.aboutMe}</span> */}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;
