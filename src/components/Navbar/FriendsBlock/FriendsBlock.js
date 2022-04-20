import classes from "./FriendsBlock.module.css";
import FriendItem from "./FriendItem/FriendItem";

const FriendsBlock = (props) => {

    let friendElements = props.friendsData.map(friend => <FriendItem key={friend} name={friend.name} avatar={friend.avatar}/>)

    return (
        <div className={classes.friendsBlock}>
        <h3 className={classes.friendsBlockHeader}>Friends</h3>
        <div className={classes.friends}>
            {friendElements}
        </div>
        </div>
    )
}

export default FriendsBlock;