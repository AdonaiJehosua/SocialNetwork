import classes from './Header.module.css';
import SRNETLogo from "../../img/SRNETLogo.png";
import {NavLink} from "react-router-dom";

function Header (props) {
    return (
        <header className={classes.header}>
            <img src={SRNETLogo}/>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'login'}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header