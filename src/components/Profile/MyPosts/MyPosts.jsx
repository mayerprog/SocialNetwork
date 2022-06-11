import React from "react";
import mp from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let state = props.profilePage
    let postElems = state.postsData
        .map(p => <Post message={p.message} key={p.id} likescount={p.likescount}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost();
    }

    let postOnChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text); //диспетчер (dispatch) берет action и передает его в reducer
    }

    return (
        <div className={mp.postsBlock}>
            <h3> My Posts </h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={state.newPostText} onChange={postOnChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={mp.posts}>
                {postElems}
            </div>
        </div>
    );
};

export default MyPosts;
