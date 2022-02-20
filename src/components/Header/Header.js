import classes from './Header.module.css';
import SRNETLogo from "../../img/SRNETLogo.png";

function Header () {
    return (
        <header className={classes.header}>
            <img src={SRNETLogo}/>
        </header>
    )
};

export default Header