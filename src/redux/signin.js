const initialState = {
    isSignIn: false,
    isSocial: false,
    accessToken: '',
};
//액션
const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';
const SIGN_IN_MAINTAIN = 'SIGN_IN_MAINTAIN';
const SOCIAL_SIGN_IN = 'SOCIAL_SIGN_IN';

//액션생성함수
export const signIn = (accessToken) => ({
    type: SIGN_IN,
    payload: {
        accessToken,
    },
});
export const signOut = () => ({
    type: SIGN_OUT,
});
export const signinMaintain = () => ({
    type: SIGN_IN_MAINTAIN,
});
export const socialSignin = () => ({
    type: SOCIAL_SIGN_IN,
});
//리듀서
export const signin = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return Object.assign({}, state, {
                isSignIn: true,
                accessToken: action.payload.accessToken,
            });
        case SIGN_OUT:
            return Object.assign({}, state, {
                isSignIn: false,
                accessToken: '',
            });
        case SIGN_IN_MAINTAIN:
            return Object.assign({}, state, {
                isSignIn: true,
            });
        case SOCIAL_SIGN_IN:
            return Object.assign({}, state, {
                isSignIn: true,
                isSocial: true,
            });
        default:
            return state;
    }
};

export default signin;
