//초기 상태값 초기화
const initialState = {
    nodeData: [],
    edgeData: [],
    nodeHistory: [],
    setParentnode: null,
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
//액션

//노드데이터
const SET_NODE_DATA = 'SET_NODE_DATA';
const ADD_NODE_DATA = 'ADD_EDGE_DATA';
const UPDATE_NODE_DATA = 'UPDATE_EDGE_DATA';
const DELETE_NODE_DATA = 'DELETE_NODE_DATA';

//엣지 추가 삭제 수정
const SET_EDGE_DATA = 'SET_EDGE_DATA';
const ADD_EDGE_DATA = 'ADD_EDGE_DATA';
const UPDATE_EDGE_DATA = 'UPDATE_EDGE_DATA';
const DELETE_EDGE_DATA = 'DELETE_EDGE_DATA';

//노드 히스토리 생성
// const

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

//리듀서
export const nodemap = (state = initialState, action) => {
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
export default nodemap;
