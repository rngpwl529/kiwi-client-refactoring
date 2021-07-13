const initialState = {
    nodeData: [],
    edgeData: [],
    parentNode: null,
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
/*   액션   */
//노드데이터
const SET_NODE_DATA = 'SET_NODE_DATA'; //노드데이터 세팅
const ADD_NODE_DATA = 'ADD_EDGE_DATA'; //노드데이터 추가
const UPDATE_NODE_DATA = 'UPDATE_EDGE_DATA'; //노드데이터 수정
const DELETE_NODE_DATA = 'DELETE_NODE_DATA'; //노드데이터 삭제
const SET_PARENT_NODE_DATA = 'SET_PARENT_NODE_DATA'; //부모 노드 설정
const HANDLE_LOADING_ON = 'HANDLE_LOADING_ON'; //데이터로딩
const SET_EDGE_DATA = 'SET_EDGE_DATA';
const ADD_EDGE_DATA = 'ADD_EDGE_DATA';

// const SET_EDGE_DATA = 'SET_EDGE_DATA';
// const ADD_EDGE_DATA = 'ADD_EDGE_DATA';
// const UPDATE_EDGE_DATA = 'UPDATE_EDGE_DATA';
// const DELETE_EDGE_DATA = 'DELETE_EDGE_DATA';

//액션생성함수
export const setNodeData = (nodeData) => ({
    type: SET_NODE_DATA,
    payload: {
        nodeData,
    },
});
export const setParentnode = (nodeData) => ({
    type: SET_PARENT_NODE_DATA,
    payload: {
        nodeData,
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
export const deleteNodeData = (nodeId) => ({
    type: DELETE_NODE_DATA,
    payload: {
        nodeId,
    },
});
export const handleLoadingOn = () => ({
    type: HANDLE_LOADING_ON,
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

export const node = (state = initialState, action) => {
    switch (action.type) {
        case SET_NODE_DATA:
            return Object.assign({}, state, {
                nodeData: action.payload.nodeData,
            });
        case SET_PARENT_NODE_DATA:
            return Object.assign({}, state, {
                parentNode: action.payload.nodeData,
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
            const id = action.payload;
            const nodeData = state.nodeData.slice().filter((el) => {
                return el.id !== id;
            });
            const edgeData = state.edgeData.slice().filter((el) => {
                return el.source !== id && el.target !== id;
            });
            return Object.assign({}, state, {
                nodeData: nodeData,
                edgeData: edgeData,
            });
        } // 수정 필요

        case HANDLE_LOADING_ON: {
            return Object.assign({}, state, {
                isLoadingOn: !state.isLoadingOn,
            });
        }
        case SET_EDGE_DATA: {
            return Object.assign({}, state, {
                edgeData: action.payload.edgeData,
            });
        }
        case ADD_EDGE_DATA: {
            return Object.assign({}, state, {
                edgeData: [...state.edgeData, action.payload.edgeData],
            });
        }
        default:
            return state;
    }
};
export default node;
