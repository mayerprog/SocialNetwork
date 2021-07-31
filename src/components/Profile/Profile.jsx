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
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
            {/* т.е. мы передаем в пропс (Объект) свойство postsData, добавив соответствующий аттрибут к компоненте */}
        </div>
    );
};

export default Profile;
