const initialState = {
    setting: {
        color: 'blue',
        font:'',
    }
  }

//액션
const CHANGE_COLOR = "CHANGE_COLOR";
const CHANGE_FONT = "CHANGE_FONT";


//액션생성함수
export const changeColor = (color) => ({
    type: CHANGE_COLOR,
    payload: {
        color
    }
});
export const changeFont = (font) => ({
    type: CHANGE_FONT,
    payload: {
        font
    }
});

//리듀서

export const setting = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FONT:
            return Object.assign({}, state, { setting: { ...state.setting, font: action.payload.font }});
        case CHANGE_COLOR:
            return Object.assign({}, state, { setting: { ...state.setting, color: action.payload.color }});
        default:
            return state;
    }
}

export default setting;