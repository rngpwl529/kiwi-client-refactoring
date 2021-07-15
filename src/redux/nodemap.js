//초기 상태값 초기화
const initialState = {
    nodeData: [],
    edgeData: [],
    nodeHistory: [],
    setParentnode: null,
    isLoadingOn: false,
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

//
const SET_PARENT_NODE = 'SET_PARENT_NODE';
const HANDLE_LOADING_ON = 'HANDLE_LOADING_ON';
// const

//액션생성함수
export const setNodeData = (nodeData, edgeData) => ({
    type: SET_NODE_DATA,
    payload: {
        nodeData,
        edgeData,
    },
});
export const addNodeData = (nodeData, edgeData) => ({
    type: ADD_NODE_DATA,
    payload: {
        nodeData,
        edgeData,
    },
});
export const updateNodeData = (nodeData) => ({
    type: UPDATE_NODE_DATA,
    payload: {
        nodeData,
    },
});
export const deleteNodeData = (parentNode) => ({
    type: DELETE_NODE_DATA,
    payload: {
        parentNode,
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
export const setParentnode = (nodeData) => ({
    type: SET_PARENT_NODE,
    payload: {
        nodeData,
    },
});
export const handleLoadingOn = () => ({
    type: HANDLE_LOADING_ON,
});

//리듀서
export const nodemap = (state = initialState, action) => {
    switch (action.type) {
        case SET_NODE_DATA:
            return Object.assign({}, state, {
                nodeData: [...action.payload.nodeData],
                edgeData: [...action.payload.edgeData],
            });

        case ADD_NODE_DATA:
            return Object.assign({}, state, {
                nodeData: [...state.nodeData, action.payload.nodeData],
                edgeData: [...state.edgeData, action.payload.edgeData],
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
            let idx = action.payload.parentNode;
            let nodeData = state.nodeData;
            let edgeData = state.edgeData;

            let updateNodeData = nodeData.filter((el) => {
                return el.id !== idx;
            });
            let updateEdgeData = edgeData.filter((el) => {
                return el.source !== idx && el.target !== idx;
            });

            return Object.assign({}, state, {
                nodeData: [...updateNodeData],
                edgeData: [...updateEdgeData],
            });
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
        case SET_PARENT_NODE:
            return Object.assign({}, state, {
                parentNode: action.payload.nodeData,
            });
        case HANDLE_LOADING_ON:
            return Object.assign({}, state, {
                isLoadingOn: !state.isLoadingOn,
            });
        default:
            return state;
    }
};
export default nodemap;
