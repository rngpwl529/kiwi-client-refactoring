const initialState = {
    siteColor: 'rgb(222, 222, 222)',
    siteFont:'16px',
}

//액션
const CHANGE_COLOR = "CHANGE_COLOR";
const CHANGE_FONT = "CHANGE_FONT";


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

//리듀서

export const setting = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FONT:
            return Object.assign({}, state, { ...state.setting, siteFont: action.payload.siteFont });
        case CHANGE_COLOR:
            return Object.assign({}, state, { ...state.setting, siteColor: action.payload.siteColor });
        default:
            return state;
    }
}

export default setting;