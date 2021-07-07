const initialState = {
    nodeData: [],
};
//서버에 데이터 요청
export const fetchData = (api, action) => (dispatch) => {
    return fetch(api)
        .then((res) => res.json())
        .then((data) => {
            dispatch(action(data));
        })
        .catch((err) => console.log(err));
};
/*   액션   */

//노드데이터
const SET_NODE_DATA = 'SET_NODE_DATA'; //노드데이터 세팅
const ADD_NODE_DATA = 'ADD_EDGE_DATA'; //노드데이터 추가
const UPDATE_NODE_DATA = 'UPDATE_EDGE_DATA'; //노드데이터 수정
const DELETE_NODE_DATA = 'DELETE_NODE_DATA'; //노드데이터 삭제

//액션생성함수
export const setNodeData = (nodeData) => ({
    type: SET_NODE_DATA,
    payload: {
        nodeData,
    },
});
export const addNodeData = (nodeData) => ({
    type: ADD_NODE_DATA,
    payload: {
        nodeData,
    },
});
export const updateNodeData = (nodeData) => ({
    type: UPDATE_NODE_DATA,
    payload: {
        nodeData,
    },
});
export const deleteNodeData = (nodeData) => ({
    type: DELETE_NODE_DATA,
    payload: {
        nodeData,
    },
});

export const node = (state = initialState, action) => {
    switch (action.type) {
        case SET_NODE_DATA:
            return Object.assign({}, state, {
                nodeData: action.payload.nodeData,
            });

        case ADD_NODE_DATA:
            return Object.assign({}, state, {
                nodeData: [...state.nodeData, action.payload.nodeData],
            });

        case UPDATE_NODE_DATA: {
            const result = Object.assign({}, state);
            const idx = state.nodeData.findIndex(
                (node) => node.id === action.payload.nodeData.id
            );
            result[idx] = action.payload.nodeData;
            return result;
            // 수정 필요
        }

        case DELETE_NODE_DATA: {
            const result = Object.assign({}, state);
            const idx = state.nodeData.findIndex(
                (node) => node.id === action.payload.nodeData.id
            );
            result.nodeData.splice(idx, 1);
            return result;
        } // 수정 필요
        default:
            return state;
    }
};
export default node;
