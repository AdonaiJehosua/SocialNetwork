import {NavLink} from "react-router-dom";
import classes from "./DialogItem.module.css";

const setActive = ({isActive}) => isActive ? classes.activeLink : classes.item;

const DialogItem = (props) => <NavLink to={props.id} className={setActive}>{props.name}</NavLink>

export default DialogItem;