const initialState = {
    siteColor: 'rgb(222, 222, 222)',
    siteFont: '16px',
    windowSize: '',
}

//액션
const CHANGE_COLOR = "CHANGE_COLOR";
const CHANGE_FONT = "CHANGE_FONT";
const SET_WINDOW_SIZE = "SET_WINDOW_SIZE";

//액션생성함수
export const changeColor = (siteColor) => ({
    type: CHANGE_COLOR,
    payload: {
        siteColor
    }
});
export const changeFont = (siteFont) => ({
    type: CHANGE_FONT,
    payload: {
        siteFont
    }
});
export const setWindowSize = (windowSize) => ({
    type: SET_WINDOW_SIZE,
    payload: {
        windowSize,
    }
})

//리듀서

export const setting = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FONT:
            return Object.assign({}, state, { ...state.setting, siteFont: action.payload.siteFont });
        case CHANGE_COLOR:
            return Object.assign({}, state, { ...state.setting, siteColor: action.payload.siteColor });
        case SET_WINDOW_SIZE:
            return Object.assign({}, state, { ...state.setting, windowSize: action.payload.windowSize });
        default:
            return state;
    }
}

export default setting;