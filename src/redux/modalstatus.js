const initialState = {
    isSettingModalOpen = false,

};
//액션
const HANDLE_SETTING_MODAL = "HANDLE_SETTING_MODAL";//
const HANDLE_USERINFO_MODAL = "HANDLE_USERINFO_MODAL";//
const HANDLE_SIGNUP_MODAL = "HANDLE_SIGNUP_MODAL";//
const HANDLE_SIGNIN_MODAL = "HANDLE_SIGNIN_MODAL";//
// 확인창, 완료창, 

//액션생성함수
export const handleSettingModal = (setting) => ({
    type: HANDLE_SETTING_MODAL,
    payload: {
        setting
    }
});
export const handleUserinfoModal = (userinfo) => ({
    type: HANDLE_USERINFO_MODAL,
    payload: {
        userinfo
    }
});
export const handleSignupModal = (signup) => ({
    type: HANDLE_SIGNUP_MODAL,
    payload: {
        signup
    }
});
export const handleSigninModal = (signin) => ({
    type: HANDLE_SIGNIN_MODAL,
    payload: {
        signin
    }
});
export const hanleModalOpen = (modal) => ({
    type: HANDLE_MODAL_OPEN,
    payload: {
        modal
    }
})

//리듀서
const settingModal = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_SETTING_MODAL:
            return Object.assign({}, state, { isSettingModal: action.payload.setting });
        case HANDLE_USERINFO_MODAL:
            return Object.assign({}, state, { isUserInfoModal: action.payload.userinfo });
        case HANDLE_SIGNUP_MODAL:
            return Object.assign({}, state, { isSignUpModal: action.payload.signup });
        case HANDLE_SIGNIN_MODAL:
            return Object.assign({}, state, { isSignInModal: action.payload.signin });
        case HANDLE_MODAL_OPEN:
            return Object.assign({}, state, { isModalOpen: action.payload.isModalOpen });
        default:
            return state;
    }
};


export default settingModal;