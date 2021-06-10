import React from "react";
import prIn from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://7themes.su/_ph/67/676540043.jpg?1619541686" width='1500px'></img>
            </div>
            <div className={prIn.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;
