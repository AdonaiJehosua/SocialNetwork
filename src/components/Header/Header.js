import classes from './Header.module.css';
import SRNETLogo from "../../img/SRNETLogo.png";
import {NavLink} from "react-router-dom";

function Header (props) {
    return (
        <header className={classes.header}>
            <img src={SRNETLogo}/>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login :
            <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header