//액션
const CHANGE_COLOR = "CHANGE_COLOR";
const CHANGE_FONT = "CHANGE_FONT";


//액션생성함수
const changeColor = (color) => ({
    type: CHANGE_COLOR,
    payload: {
        color
    }
});
const changeFont = (font) => ({
    type: CHANGE_FONT,
    payload: {
        font
    }
});

//리듀서
const color = (state, action) => {
    switch (action.type) {
        case CHANGE_COLOR:
            return Object.assign({}, state, { siteColor: action.payload.color });
        default:
            return state;
    }
};

const font = (state, action) => {
    switch (action.type) {
        case CHANGE_FONT:
            return Object.assign({}, state, { nodeFont: action.payload.font, siteFont: action.payload.font });
        default:
            return state;
    }
};