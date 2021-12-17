import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import pr from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
            {/* без скобочек, потому что мы этот метод не вызываем, а только передаем компоненте */}
            {/* т.е. мы передаем в пропс (Объект) свойство postsData, добавив соответствующий аттрибут к компоненте */}
        </div>
    );
};

export default Profile;
