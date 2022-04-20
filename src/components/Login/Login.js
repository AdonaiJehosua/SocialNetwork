import LoginForm from "./LoginForm";
import {login} from "../../redux/reducers/authReducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";



const Login = (props) => {
    const onSubmit = (values, {setFieldValue, setSubmitting}) => {
        props.login(values.login, values.password, values.rememberMe, setFieldValue, setSubmitting);
        setSubmitting(true)
    }
    if (props.isAuth) {
       return <Navigate to={'/profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            {<LoginForm onSubmit={onSubmit} isAuth={props.isAuth}/>}
        </div>
    )
}

let mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
}

export default connect(mapStateToProps, {login}) (Login);