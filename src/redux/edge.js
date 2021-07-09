const initialState = {
    edgeData: [],
};
//엣지 데이터
const SET_EDGE_DATA = 'SET_EDGE_DATA'; //엣지데이터 세팅
const ADD_EDGE_DATA = 'ADD_EDGE_DATA'; //엣지데이터 추가
const UPDATE_EDGE_DATA = 'UPDATE_EDGE_DATA'; //엣지데이터 수정
const DELETE_EDGE_DATA = 'DELETE_EDGE_DATA'; //엣지데이터 삭제

export const setEdgeData = (edgeData) => ({
    type: SET_EDGE_DATA,
    payload: {
        edgeData,
    },
});
export const addEdgeData = (edgeData) => ({
    type: ADD_EDGE_DATA,
    payload: {
        edgeData,
    },
});
export const updateEdgeData = (edgeData) => ({
    type: UPDATE_EDGE_DATA,
    payload: {
        edgeData,
    },
});
export const deleteEdgeData = (edgeData) => ({
    type: DELETE_EDGE_DATA,
    payload: {
        edgeData,
    },
});

export const edge = (state = initialState, action) => {
    switch (action.type) {
        case SET_EDGE_DATA:
            return Object.assign({}, state, {
                edgeData: action.payload.edgeData,
            });

        case ADD_EDGE_DATA:
            return Object.assign({}, state, {
                edgeData: [...state.edgeData, action.payload.edgeData],
            });
        case UPDATE_EDGE_DATA:
            return Object.assign({}, state, {
                nodeDate: [...state.edgeData, action.payload.edgeDate],
            });
        case DELETE_EDGE_DATA: {
            const result = Object.assign({}, state);
            const idx = state.edgeData.findIndex(
                (node) => node.id === action.payload.edgeData.id
            );
            result.edgeData.splice(idx, 1);
            return result;
        }

        default:
            return state;
    }
};
export default edge;
