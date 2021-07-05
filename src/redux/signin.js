//액션
const HANDLE_SIGNIN = "HANDLE_SIGNIN";
const HANDLE_TOKEN_SET = "HANDLE_TOKEN_SET";


//액션생성함수
const handleSignin = (signin) => ({
    type: HANDLE_SIGNIN,
    payload: {
        signin
    }
});
const handleTokenSet = (tokenset) => ({
    type: HANDLE_TOKEN_SET,
    payload: {
        tokenset
    }
});
//리듀서
const signin = (state, action) => {
    switch (action.type) {
        case HANDLE_SIGNIN:
            return Object.assign({}, state, { isSignIn: action.payload.signin });
        default:
            return state;
    }
};

const tokenset = (state, action) => {
    switch (action.type) {
        case HANDLE_TOKEN_SET:
            return Object.assign({}, state, { localStorage: action.payload.signin, cookie: action.payload.tokenset });
        default:
            return state;
    }
};