import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForNavigate = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthNavigate = (Component) => {
    function RedirectComponent (props) {
        if (!props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...props}/>
    }
    let ConnectedAuthNavigateComponent = connect(mapStateToPropsForNavigate)(RedirectComponent)
    return ConnectedAuthNavigateComponent
}

