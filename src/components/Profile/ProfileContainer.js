import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfile, updateStatus} from "../../redux/reducers/profileReducer";
import {useParams} from "react-router";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";

function ProfileContainer(props) {
    let {userId} = useParams()
    if (!userId) {
        userId = props.autorizedUserId
    }
    useEffect(() => {
        props.getProfile(userId);
        props.getStatus(userId);
    })

    return <Profile {...props}
                    profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus}
                    savePhoto={props.savePhoto}
                    saveProfile={props.saveProfile}
    />
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth

    }
}
export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withAuthNavigate
)(ProfileContainer)