import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/reducers/profileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (text) => dispatch(onPostChangeActionCreator(text))
    }
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;