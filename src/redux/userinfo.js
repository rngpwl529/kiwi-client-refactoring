//액션
const HANDLE_USERINFO_CHANGE_MODE = "HANDLE_USERINFO_CHANGE_MODE";
const HANDLE_USERINFO = "HANDLE_USERINFO";
const HANDEL_TREND_KEYWORD = "HANDEL_TREND_KEYWORD";


//액션생성함수
const handleUserinfoChangeMode = (mode) => ({
    type: HANDLE_USERINFO_CHANGE_MODE,
    payload: {
        mode
    }
});
const handleUserinfo = (userinfo) => ({
    type: HANDLE_USERINFO,
    payload: {
        userinfo
    }
});
const handelTrendKeyword = (keyword) => ({
    type: HANDLE_USERINFO,
    payload: {
        keyword
    }
});

//리듀서
const userinfoChangeMode = (state, action) => {
    switch (action.type) {
        case HANDLE_USERINFO_CHANGE_MODE:
            return Object.assign({}, state, { isChangeMode: action.payload.mode });
        default:
            return state;
    }
};

const userinfo = (state, action) => {
    switch (action.type) {
        case HANDLE_USERINFO:
            return Object.assign({}, state, { userInfo: action.payload.userinfo });
        default:
            return state;
    }
};

const trendKeyword = (state, action) => {
    switch (action.type) {
        case HANDLE_USERINFO:
            return Object.assign({}, state, { trendKeywords: action.payload.keyword });
        default:
            return state;
    }
};