import React from "react";
import mp from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    debugger;
    return (
        <div className={mp.postsBlock}>
            <h3> My Posts </h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={mp.posts}>
                <Post message='hey, wassup!' likescount='105'/>
                <Post message="I'm a dumb" likescount='0'/>
            </div>
        </div>
    );
};

export default MyPosts;
