import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import pr from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
            {/* без скобочек, потому что мы этот метод не вызываем, а только передаем компоненте */}
            {/* т.е. мы передаем в пропс (Объект) свойство postsData, добавив соответствующий аттрибут к компоненте */}
        </div>
    );
};

export default Profile;
