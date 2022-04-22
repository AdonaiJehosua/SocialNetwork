import {Form, Formik} from "formik";


const LoginForm = (props) => {
    return (<Formik
            onSubmit={props.onSubmit}
            initialValues={{login: '', password: '', rememberMe: false, captcha: null}}
            validate={values => {
                const errors = {};
                if (!values.login) {
                    errors.login = 'Please, enter login'
                }
                if (!values.password) {
                    errors.password = 'Please, enter password'
                }
                if (props.captchaUrl && !values.captcha) {
                    errors.captcha = 'Enter captcha'
                }
                if (values.password && values.password.length < 8) {
                    errors.password = 'password must contain at least 8 characters'
                }
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
                        <label>Login</label>
                        <input name="login"
                               type={'text'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.login}
                               placeholder={'enter login'}/>
                        {errors.login && touched.login && errors.login}
                    </div>
                    <div>
                        <label>Password</label>
                        <input name={'password'}
                               type={'password'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               placeholder={'enter password'}/>
                        {errors.password && touched.password && errors.password}
                    </div>
                    <input name={'rememberMe'} type={'checkbox'}/> Remember me
                    <div>
                        {values.general ? <span>{values.general}</span> : null}
                    </div>
                    <div>
                        <div>
                            {props.captchaUrl && <img alt={'captcha'} src={props.captchaUrl}/>}
                        </div>
                        {props.captchaUrl && <input name={'captcha'}
                                                    type={'text'}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder={'enter captcha'}/>}
                        {errors.captcha && touched.captcha && errors.captcha}
                    </div>
                    <div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={handleReset}
                            disabled={isSubmitting}
                        >
                            Reset
                        </button>
                    </div>

                </Form>
            )}
        </Formik>
    )
}

export default LoginForm