import classes from './MyPosts.module.css';
import PostItem from "./Post/PostItem";
import React from "react";

function MyPosts(props) {

    let postsElements = props.posts.map(post => <PostItem key={post} post={post.postmessage} likesCount={post.likesCount}/>)

    let onAddPost = () => {props.addPost()};
    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea value={props.newPostText} onChange={onPostChange}/>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;