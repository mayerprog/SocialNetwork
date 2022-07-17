import React from "react";
import Preloader from "../../common/Preloader";
import prIn from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    if (!props.profile) { //(props.profile == null || props.profile == undefined)
        return <Preloader />
    }

    return (
        <div>
            {/* <div>
                <img src="https://7themes.su/_ph/67/676540043.jpg?1619541686" width='500px'></img>
            </div> */}
            <div className={prIn.descriptionBlock}>
                <div><img src={props.profile.photos.large}/></div>
                <span>{props.profile.aboutMe}</span>
            </div>
        </div>
    );
};

export default ProfileInfo;
