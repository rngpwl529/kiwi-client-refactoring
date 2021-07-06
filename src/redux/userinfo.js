//초기 상태값 초기화
const initailState = {
    
}

//액션
const HANDLE_USERINFO_CHANGE_MODE = "HANDLE_USERINFO_CHANGE_MODE";
const HANDLE_USERINFO = "HANDLE_USERINFO";
const HANDEL_TREND_KEYWORD = "HANDEL_TREND_KEYWORD";


//액션생성함수
export const handleUserinfoChangeMode = (mode) => ({
    type: HANDLE_USERINFO_CHANGE_MODE,
    payload: {
        mode
    }
});
export const handleUserinfo = (userinfo) => ({
    type: HANDLE_USERINFO,
    payload: {
        userinfo
    }
});
export const handelTrendKeyword = (keyword) => ({
    type: HANDLE_USERINFO,
    payload: {
        keyword
    }
});

//리듀서
export const userinfoChangeMode = (state, action) => {
    switch (action.type) {
        case HANDLE_USERINFO_CHANGE_MODE:
            return Object.assign({}, state, { isChangeMode: action.payload.mode });
        default:
            return state;
    }
};

export const userinfo = (state, action) => {
    switch (action.type) {
        case HANDLE_USERINFO:
            return Object.assign({}, state, { userInfo: action.payload.userinfo });
        default:
            return state;
    }
};

export const trendKeyword = (state, action) => {
    switch (action.type) {
        case HANDEL_TREND_KEYWORD:
            return Object.assign({}, state, { trendKeywords: action.payload.keyword });
        default:
            return state;
    }
};

export default userinfo;