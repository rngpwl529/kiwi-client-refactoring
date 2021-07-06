const initialState = {
    isSignIn: false,
    accessToken: "",
};
//액션
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";

//액션생성함수
export const signIn = (accessToken) => ({
    type: SIGN_IN,
    payload: {
        accessToken
    }
});
export const signOut = () => ({
    type: SIGN_OUT,
});


//리듀서
export const signin = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return Object.assign({}, state, { isSignIn: true, accessToken: action.payload.accessToken });
        case SIGN_OUT:
            return Object.assign({}, state, { isSignIn: false, accessToken: "" });
        default:
            return state;
    }
};

export default signin;