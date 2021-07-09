//초기 상태값 초기화
const initailState = {
    id: "",
    email: "",
    username:  "",
    bookmarkKeyword: [],
    userInfoChangeMode: false,
    windowWidth: null,
};

//액션
const UPDATE_USERINFO = 'HANDLE_USERINFO';
const GET_BOOKMARK_KEYWORD = 'GET_BOOKMARK_KEYWORD';
const ADD_BOOKMARK_KEYWORD = 'ADD_BOOKMARK_KEYWORD';
const DELETE_BOOKMARK_KEYWORD = 'DELETE_BOOKMARK_KEYWORD';

//액션생성함수
export const updateUserInfo = (userInfo) => ({
    type: UPDATE_USERINFO,
    payload: {
        userInfo,
    },
});

export const getBookmarkKeyword = (keyword) => ({
    type: GET_BOOKMARK_KEYWORD,
    payload: {
        keyword,
    },
});
export const addBookmarkKeyword = (keyword) => ({
    type: ADD_BOOKMARK_KEYWORD,
    payload: {
        keyword,
    },
});
export const deleteBookmarkKeyword = (keyword) => ({
    type: DELETE_BOOKMARK_KEYWORD,
    payload: {
        keyword,
    },
});

//리듀서
export const userInfo = (state = initailState, action) => {
    switch (action.type) {
        case UPDATE_USERINFO:
            return Object.assign({}, state, {
                userInfo: { ...action.payload.userInfo },
            });

        case ADD_BOOKMARK_KEYWORD:
            return Object.assign({}, state, {
                bookmarkKeyword: action.payload.keyword,
            });

        case GET_BOOKMARK_KEYWORD:
            return Object.assign({}, state, {
                bookmarkKeyword: [
                    ...state.bookmarkKeyword,
                    action.payload.keyword,
                ],
            });

        case DELETE_BOOKMARK_KEYWORD: {
            const idx = state.bookmarkKeyword.findIndex(
                (keyword) => keyword === action.payload.keyword
            );
            const result = Object.assign({}, state);
            result.bookmarkKeyword.splice(idx, 1);
            return result;
        }

        default:
            return state;
    }
};

export default userInfo;
