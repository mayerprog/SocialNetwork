import React from "react";
import {
    addPostActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import connect from "react-redux/lib/connect/connect";
// import {connect} from "react-redux"


/*const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let postOnChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action); //диспетчер (dispatch) берет action и передает его в reducer
    }

    return (
        <MyPosts updateNewPostText={postOnChange}
                 addPost={addPost}
                 profilePage={state}/>
    )
};*/

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => dispatch(addPostActionCreator(newPostText))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
