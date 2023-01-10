import React from "react";
import mp from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Form, Field } from 'react-final-form'


const MyPosts = (props) => {
    let state = props.profilePage
    let postElems = state.postsData
        .map(p => <Post message={p.message} key={p.id} likescount={p.likescount} />)


    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={mp.postsBlock}>
            <h3> My Posts </h3>
            <Form
                onSubmit={onAddPost}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field
                                name="newPostText"
                                component="textarea"
                                type="text"
                            />
                        </div>
                        <div>
                            <button>Add post</button>
                        </div>
                    </form>
                )}
            />
            <div className={mp.posts}>
                {postElems}
            </div>
        </div>
    );
};

export default MyPosts;
