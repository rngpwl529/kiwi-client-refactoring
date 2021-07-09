const initialState = {
    nodehistory: [],
};

const SET_DEFAULT_HISTORY = 'SET_DEFAULT_DATA'; //루트 노드로 세팅
const PREV_MOVE_HISTORY = 'PREV_MOVE_HISTORY'; //다음 노드로 추가
const NEXT_MOVE_HISTORY = 'NEXT_MOVE_HISTORY'; //이전 노드로 수정

//액션생성함수
export const setDefaultHistory = (nodeData) => ({
    type: SET_DEFAULT_HISTORY,
    payload: {
        nodeData,
    },
});
export const prevMoveHistory = (nodeData) => ({
    type: PREV_MOVE_HISTORY,
    payload: {
        nodeData,
    },
});
export const nextMoveHistory = (nodeData) => ({
    type: NEXT_MOVE_HISTORY,
    payload: {
        nodeData,
    },
});

export const maphistory = (state = initialState, action) => {
    switch (action.type) {
        case SET_DEFAULT_HISTORY:
            return Object.assign({}, state, {
                nodeData: action.payload.nodeData,
            });

        case PREV_MOVE_HISTORY:
            return Object.assign({}, state, {
                nodeData: [...state.nodeData, action.payload.nodeData],
            });

        case NEXT_MOVE_HISTORY: {
            const result = Object.assign({}, state);
            const idx = state.nodeData.findIndex(
                (node) => node.id === action.payload.nodeData.id
            );
            result[idx] = action.payload.nodeData;
            return result;
            // 수정 필요
        }
        default:
            return state;
    }
};
export default maphistory;
