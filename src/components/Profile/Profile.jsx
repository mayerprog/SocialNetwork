import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
            {/* без скобочек, потому что мы этот метод не вызываем, а только передаем компоненту */}
            {/* т.е. мы передаем в пропс (Объект) свойство postsData, добавив соответствующий аттрибут к компоненте */}
        </div>
    );
};

export default Profile;
