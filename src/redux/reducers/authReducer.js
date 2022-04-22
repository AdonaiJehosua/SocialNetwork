import {authAPI, secyrityAPI} from "../../API/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export let setAuthUserData = (userId, email, login, isAuth, captchaUrl) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth, captchaUrl}
});
export let getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    data: {captchaUrl}
});

export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.me()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha, setFieldValue, setSubmitting) => (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                if (response.resultCode === 10) {
                    dispatch(getCaptchaUrl())
                }
                let errorMessages = response.messages.length > 0 ? response.messages[0] : 'Some error'
                setFieldValue('general', errorMessages);
                setSubmitting(false)
            }
        })
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await secyrityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false, null ))
            }

        })
}

