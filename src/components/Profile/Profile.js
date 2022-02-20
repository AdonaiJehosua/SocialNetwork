import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile() {
    return (
        <div className={classes.main}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;