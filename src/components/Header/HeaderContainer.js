import React from "react";
import {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/reducers/authReducer";

function HeaderContainer(props) {
    useEffect(() => {
        props.getAuthUserData()
    })
    return <Header {...props}/>
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)