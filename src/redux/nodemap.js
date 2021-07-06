//초기 상태값 초기화
const initialState = {
    nodeData: [],
    edgeData: [],
    nodeHistory: [],
};

//액션

//노드데이터
const POST_NODE_DATA = "POST_NODE_DATA";
const ADD_NODE_DATA = "ADD_EDGE_DATA";
const UPDATE_NODE_DATA = "UPDATE_EDGE_DATA";
const DELETE_NODE_DATA = "DELETE_NODE_DATA";

//엣지 추가 삭제 수정
const POST_EDGE_DATA = "POST_EDGE_DATA";
const ADD_EDGE_DATA = "ADD_EDGE_DATA";
const DELETE_EDGE_DATA = "DELETE_EDGE_DATA";

//노드 히스토리 생성
// const 


//액션생성함수
export const getNodeData = (nodeData) => ({
    type: POST_NODE_DATA,
    payload: {
        nodeData
    }
});
export const addNodeData = (nodeData) => ({
    type: ADD_NODE_DATA,
    payload: {
        nodeData
    }
});
export const updateNodeData = (nodeData) => ({
    type: UPDATE_NODE_DATA,
    payload: {
        nodeData
    }
});
export const deleteNodeData = (nodeData) => ({
    type: DELETE_NODE_DATA,
    payload: {
        nodeData
    }
});

export const postEdgeData = (edgeData) => ({
    type: POST_EDGE_DATA,
    payload: {
        edgeData
    }
});
export const addEdgeData = (edgeData) => ({
    type: ADD_EDGE_DATA,
    payload: {
        edgeData
    }
});
export const deleteEdgeData = (edgeData) => ({
    type: DELETE_EDGE_DATA,
    payload: {
        edgeData
    }
});

//리듀서
export const nodemap = (state=initialState, action) => {
    switch (action.type) {
        case POST_NODE_DATA:
            return Object.assign({}, state, { nodeData: action.payload.nodeData });

        case ADD_NODE_DATA:
            return Object.assign({}, state, { nodeData: [ ...state.nodeData, action.payload.nodeData ] });

        case UPDATE_NODE_DATA: {
            const result = Object.assign({}, state);
            const idx = state.nodeData.findIndex((node)=>(node.id===action.payload.nodeData.id));
            result[idx] = action.payload.nodeData
            return result;  
            // 수정 필요
        }

        case DELETE_NODE_DATA: {
            const result = Object.assign({}, state);
            const idx = state.nodeData.findIndex((node)=>(node.id===action.payload.nodeData.id));
            result.nodeData.splice(idx,1);  
            return result;   
        }                            // 수정 필요

        case POST_EDGE_DATA:
            return Object.assign({}, state, { edgeData: action.payload.edgeData });

        case ADD_EDGE_DATA:
            return Object.assign({}, state, { edgeData: [ ...state.edgeData, action.payload.edgeData ]});

        case DELETE_EDGE_DATA: {
            const result = Object.assign({}, state);
            const idx = state.edgeData.findIndex((node)=>(node.id===action.payload.edgeData.id));
            result.edgeData.splice(idx,1);
            return result;
        }

        default:
            return state;
    }
};
export default nodemap;