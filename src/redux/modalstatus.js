//액션
const HANDLE_SETTING_MODAL = "HANDLE_SETTING_MODAL";
const HANDLE_USERINFO_MODAL = "HANDLE_USERINFO_MODAL";
const HANDLE_SIGNUP_MODAL = "HANDLE_SIGNUP_MODAL";
const HANDLE_SIGNIN_MODAL = "HANDLE_SIGNIN_MODAL";

//액션생성함수
const handleSettingModal = (setting) => ({
    type: HANDLE_SETTING_MODAL,
    payload: {
        setting
    }
});
const handleUserinfoModal = (userinfo) => ({
    type: HANDLE_USERINFO_MODAL,
    payload: {
        userinfo
    }
});
const handleSignupModal = (signup) => ({
    type: HANDLE_SIGNUP_MODAL,
    payload: {
        signup
    }
});
const handleSigninModal = (signin) => ({
    type: HANDLE_SIGNIN_MODAL,
    payload: {
        signin
    }
});

//리듀서
const settingModal = (state, action) => {
    switch (action.type) {
        case HANDLE_SETTING_MODAL:
            return Object.assign({}, state, { isSettingModalOpen: action.payload.setting });
        default:
            return state;
    }
};
const userinfoModal = (state, action) => {
    switch (action.type) {
        case HANDLE_USERINFO_MODAL:
            return Object.assign({}, state, { isUserInfoModalOpen: action.payload.userinfo });
        default:
            return state;
    }
};
const signupModal = (state, action) => {
    switch (action.type) {
        case HANDLE_SIGNUP_MODAL:
            return Object.assign({}, state, { isSignUpModalOpen: action.payload.signup });
        default:
            return state;
    }
};
const signinModal = (state, action) => {
    switch (action.type) {
        case HANDLE_SIGNIN_MODAL:
            return Object.assign({}, state, { isSignInModalOpen: action.payload.signin });
        default:
            return state;
    }
};