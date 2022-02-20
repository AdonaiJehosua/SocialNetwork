import classes from "./FriendItem.module.css";

const FriendItem = (props) => {
    return (
        <div className={classes.friend}>
            <img alt={'friend avatar'} className={classes.friendAvatar} src={props.avatar}/>
            <div className={classes.friendName}>
                {props.name}
            </div>
        </div>
    )
}

export default FriendItem;