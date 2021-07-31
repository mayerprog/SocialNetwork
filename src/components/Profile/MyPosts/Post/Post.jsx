import React from "react";
import p from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={p.item}>
      <div>
        <img src="https://cs11.pikabu.ru/post_img/2019/10/16/10/1571246121185355429.jpg" />
      </div>
      {props.message}
      <div>
        <span>likes</span> {props.likescount}
      </div>
    </div>
  );
};

export default Post;
