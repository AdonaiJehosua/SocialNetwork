import classes from "./ProfileInfo.module.css";
import ContentImage from "../../../img/ContentImage.jpg";


const ProfileInfo = (props) => {
    return (
        <div>
            <img alt={'ProfileImage'} className={classes.profile_img} src={ContentImage}/>
            <div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;