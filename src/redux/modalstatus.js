const initialState = {
    settingModal: false,
    userInfoModal: false,
    signupModal: false,
    signinModal: false,
    nodeoptionModal: false,
    nodesettingModal: false,
};
//액션
const OPEN_SETTING_MODAL = 'OPEN_SETTING_MODAL';
const CLOSE_SETTING_MODAL = 'CLOSE_SETTING_MODAL';

const OPEN_USERINFO_MODAL = 'OPEN_USERINFO_MODAL';
const CLOSE_USERINFO_MODAL = 'CLOSE_USERINFO_MODAL';

const OPEN_SIGNUP_MODAL = 'OPEN_SIGNUP_MODAL';
const CLOSE_SIGNUP_MODAL = 'CLOSE_SIGNUP_MODAL';

const OPEN_SIGNIN_MODAL = 'OPEN_SIGNIN_MODAL';
const CLOSE_SIGNIN_MODAL = 'CLOSE_SIGNIN_MODAL';

const OPEN_NODEOPTION_MODAL = 'OPEN_NODEOPTION_MODAL';
const CLOSE_NODEOPTION_MODAL = 'CLOSE_NODEOPTION_MODAL';

const OPEN_NODESETTING_MODAL = 'OPEN_NODESETTING_MODAL';
const CLOSE_NODESETTING_MODAL = 'CLOSE_NODESETTING_MODAL';

//액션생성함수
export const openSettingModal = () => ({
    type: OPEN_SETTING_MODAL,
});
export const closeSettingModal = () => ({
    type: CLOSE_SETTING_MODAL,
});
export const openUserinfoModal = () => ({
    type: OPEN_USERINFO_MODAL,
});
export const closeUserinfoModal = () => ({
    type: CLOSE_USERINFO_MODAL,
});
export const openSignupModal = () => {
    return {
        type: OPEN_SIGNUP_MODAL,
    };
};
export const closeSignupModal = () => ({
    type: CLOSE_SIGNUP_MODAL,
});
export const openSigninModal = () => ({
    type: OPEN_SIGNIN_MODAL,
});
export const closeSigninModal = () => ({
    type: CLOSE_SIGNIN_MODAL,
});
export const openNodesettingModal = (x, y) => ({
    payload: [x, y],
    type: OPEN_NODESETTING_MODAL,
});
export const closeNodesettingModal = () => ({
    type: CLOSE_NODESETTING_MODAL,
});
export const openNodeoptionModal = () => ({
    type: OPEN_NODEOPTION_MODAL,
});
export const closeNodeoptionModal = () => ({
    type: CLOSE_NODEOPTION_MODAL,
});

//리듀서
const settingModal = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_SETTING_MODAL:
            return Object.assign({}, state, { settingModal: true });
        case CLOSE_SETTING_MODAL:
            return Object.assign({}, state, { settingModal: false });

        case OPEN_USERINFO_MODAL:
            return Object.assign({}, state, { userInfoModal: true });
        case CLOSE_USERINFO_MODAL:
            return Object.assign({}, state, { userInfoModal: false });

        case OPEN_SIGNUP_MODAL:
            return Object.assign({}, state, { signupModal: true });
        case CLOSE_SIGNUP_MODAL:
            return Object.assign({}, state, { signupModal: false });

        case OPEN_SIGNIN_MODAL:
            return Object.assign({}, state, { signinModal: true });
        case CLOSE_SIGNIN_MODAL:
            return Object.assign({}, state, { signinModal: false });

        case OPEN_NODESETTING_MODAL:
            return Object.assign({}, state, {
                nodesettingModal: action.payload,
            });
        case CLOSE_NODESETTING_MODAL:
            return Object.assign({}, state, { nodesettingModal: false });

        case OPEN_NODEOPTION_MODAL:
            return Object.assign({}, state, { nodeoptionModal: true });
        case CLOSE_NODEOPTION_MODAL:
            return Object.assign({}, state, { nodeoptionModal: false });

        default:
            return state;
    }
};

export default settingModal;
