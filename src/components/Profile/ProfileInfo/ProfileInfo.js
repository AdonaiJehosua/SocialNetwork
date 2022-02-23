import classes from "./ProfileInfo.module.css";
import ContentImage from "../../../img/ContentImage.jpg";
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <img alt={'ProfileImage'} className={classes.profile_img} src={ContentImage}/>
            <div className={classes.description}>
                <img src={props.profile.photos.large}/>
                <div>
                <h2>{props.profile.fullName}</h2>
                <div>{props.profile.aboutMe}</div>
                <div>
                    <h3>{`Looking for a job: ${props.profile.lookingForAJob ? 'Yes' : 'No'}`}</h3>
                    <div>{props.profile.lookingForAJobDescription}</div>

                </div>
                <div>
                    <h3>Contacts</h3>
                    <a href={'##'}>{props.profile.contacts.facebook}</a>
                    <a href={'##'}>{props.profile.contacts.website}</a>
                    <a href={'##'}>{props.profile.contacts.vk}</a>
                    <a href={'##'}>{props.profile.contacts.twitter}</a>
                    <a href={'##'}>{props.profile.contacts.instagram}</a>
                    <a href={'##'}>{props.profile.contacts.youtube}</a>
                    <a href={'##'}>{props.profile.contacts.github}</a>
                    <a href={'##'}>{props.profile.contacts.mainLink}</a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;