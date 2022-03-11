import {profileAPI, usersAPI} from "../../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        {id: 1, postmessage: 'Hey', likesCount: 10},
        {id: 2, postmessage: 'Yo', likesCount: 5},
        {id: 3, postmessage: 'How are you', likesCount: 6},
        {id: 4, postmessage: 'I\'m fine', likesCount: 2},
    ],
    newPostText: 'blabla',
    profile: null,
    status: 'blabla'
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let post = {id: 5, postmessage: state.newPostText, likesCount: 0};
            return {...state,
                postsData: [...state.postsData, {id: 5, postmessage: state.newPostText, likesCount: 0}],
                newPostText: ''};
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.postText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}

export let addPostActionCreator = () => ({type: ADD_POST});
export let onPostChangeActionCreator = (postText) => ({type: UPDATE_NEW_POST_TEXT, postText});
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE , profile})
export let setStatus = (status) => ({type: SET_STATUS , status})

export const getProfile = (userId) => (dispatch) => {

    profileAPI.getProfile(userId)
        .then(data => {

            dispatch(setUserProfile(data))
        })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(status => {
            // debugger
            dispatch(setStatus(status))
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {

            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}