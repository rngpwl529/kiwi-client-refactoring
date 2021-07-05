const initialState = {
    isSignin: false,
    accessToken: "",
};
//액션
const HANDLE_SIGNIN = "HANDLE_SIGNIN";
const HANDLE_TOKEN_SET = "HANDLE_TOKEN_SET";


//액션생성함수
export const handleSignin = (signin) => ({
    type: HANDLE_SIGNIN,
    payload: {
        signin
    }
});
export const handleTokenSet = (tokenset) => ({
    type: HANDLE_TOKEN_SET,
    payload: {
        tokenset
    }
});


//리듀서
export const signin = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_SIGNIN:
            return Object.assign({}, state, { isSignIn: action.payload.signin });
        case HANDLE_TOKEN_SET:
            return Object.assign({}, state, { localStorage: action.payload.signin, cookie: action.payload.tokenset });
        default:
            return state;
    }
};

export default signin;