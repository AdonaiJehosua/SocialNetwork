import classes from "./ProfileInfo.module.css";
import ContentImage from "../../../img/ContentImage.jpg";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import Avatar from '../../../img/Avatar.png'
import {useParams} from "react-router";
import {useState} from "react";
import {ProfileDataForm} from "./ProfileDataForm";

const ProfileInfo = (props) => {
    let {userId} = useParams()

    const [editMode, setEditMode] = useState(false)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const dectivateEditMode = () => {
        setEditMode(false)
    }

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = async (values, {setFieldValue, setSubmitting}) => {
        await props.saveProfile(values, setFieldValue, setSubmitting);
        setSubmitting(true)
        dectivateEditMode()
    }

    return (
        <div>
            <img alt={'ProfileImage'} className={classes.profile_img} src={ContentImage}/>
            <div className={classes.description}>
                <div className={classes.avatarBox}>
                    <img className={classes.userAvatar} alt={'UserAvatar'} src={props.profile.photos.large || Avatar}/>
                    {!userId && <input className={classes.changeAvatar} type={'file'} onChange={onMainPhotoSelected}/>}
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {editMode ? <ProfileDataForm profile={props.profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={props.profile} editMode={editMode} userId={userId} activateEditMode={activateEditMode}/>}
            </div>
        </div>
    )
}

const ProfileData = ({profile, ...props}) => {

    return (
        <div>
            <div>
                <h2>{profile.fullName}</h2>
                {!props.userId && !props.editMode && <button onClick={props.activateEditMode}>Edit profile info</button>}
<h3>About me</h3>
                <div>{profile.aboutMe}</div>
                <div>
                    <h3>{`Looking for a job: ${profile.lookingForAJob ? 'Yes' : 'No'}`}</h3>
                    <h3>My professional skills:</h3>
                    {!profile.lookingForAJobDescription ? <div>No description</div> : <div>{profile.lookingForAJobDescription}</div>}

                </div>
                <div>
                    <h3>Contacts</h3>
                    {Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default ProfileInfo;