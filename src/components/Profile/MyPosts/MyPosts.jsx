import React from "react";
import mp from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";



const MyPosts = (props) => {
    let postElems = props.postsData
        .map(p => <Post message={p.message} likescount={p.likescount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let postOnChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={mp.postsBlock}>
            <h3> My Posts </h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={postOnChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={mp.posts}>
                {postElems}
            </div>
        </div>
    );
};

export default MyPosts;
