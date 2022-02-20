import classes from './Post.module.css';
import Avatar from '../../../../img/Avatar.png';

function PostItem(props) {
    return (
        <div>
            <img alt={'avatar'} className={classes.avatar} src={Avatar}/>
            {props.post}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default PostItem;