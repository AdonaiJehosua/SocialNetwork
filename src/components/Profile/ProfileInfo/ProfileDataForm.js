import {Form, Field, Formik} from "formik";
import {Contact} from "./ProfileInfo";

export const ProfileDataForm = ({profile, ...props}) => {
    return (
        <Formik
            onSubmit={props.onSubmit}
            initialValues={{
                fullName: profile.fullName,
                aboutMe: profile.aboutMe,
                lookingForAJob: profile.lookingForAJob,
                lookingForAJobDescription: profile.lookingForAJobDescription,
                contacts: profile.contacts
            }}
            validate={values => {
                const errors = {};
                return errors
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  handleReset
              }) => (
                <Form onSubmit={handleSubmit}>
                    <div>
                        <label>Full name</label>
                        <input name="fullName"
                               type={'text'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.fullName}
                               placeholder={'enter full name'}/>
                    </div>
                    <div>
                        <label>About me</label>
                        <input name={'aboutMe'}
                               type={'text'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.aboutMe}
                               placeholder={'enter about yourself'}/>
                    </div>
                    <div>
                    <lable>Looking for a job</lable>
                    <Field name={'lookingForAJob'} type={'checkbox'}/>
                    </div>
                    <div>
                        <div>My professional skills</div>
                        <textarea name={'lookingForAJobDescription'}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.lookingForAJobDescription}
                                  placeholder={'enter your professional skills'}
                        />
                    </div>
                    <div>
                        <label>Contacts</label>
                        {Object.keys(profile.contacts).map(key => {
                            return <div>
                                {key}: <input name={`contacts.` + key}
                                              type={'text'}
                                              placeholder={key}
                                              value={values.contacts[key]}
                                              onChange={handleChange}
                                              onBlur={handleBlur}/>
                            </div>
                        })}
                    </div>
                    <button type="submit">Submit</button>
                    <div>
                        {values.general ? <span>{values.general}</span> : null}
                    </div>
                </Form>
            )}
        </Formik>
    )
}