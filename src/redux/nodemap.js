//초기 상태값 초기화
const initialState = {
    nodeData: {},
    edgeData: {},
};
//액션
//노드데이터
const HANDLE_NODEMAP_DATA = "HANDLE_NODEMAP_DATA";
const GET_NODEDATA = "GET_NODE_DATA";
const ADD_NODEDATA = "ADD_EDGE_DATA";
const DELETE_NODEDATA = "DELETE_NODEDATA";
//엣지 추가 삭제 수정
//노드 맵 데이터


//액션생성함수
export const handleNodemapData = (nodemap) => ({
    type: HANDLE_NODEMAP_DATA,
    payload: {
        nodemap
    }
});
export const handleNodeData = (node) => ({
    type: HANDLE_NODE_DATA,
    payload: {
        node
    }
});
export const handleEdgeData = (edge) => ({
    type: HANDLE_EDGE_DATA,
    payload: {
        edge
    }
});

//리듀서
export const nodemapData = (state, action) => {
    switch (action.type) {
        case HANDLE_NODEMAP_DATA:
            return Object.assign({}, state, { nodemapData: action.payload.nodemap });
        default:
            return state;
    }
};

export const nodeData = (state, action) => {
    switch (action.type) {
        case HANDLE_NODE_DATA:
            return Object.assign({}, state, { nodeData: action.payload.node });
        default:
            return state;
    }
};

export const edgeData = (state, action) => {
    switch (action.type) {
        case HANDLE_EDGE_DATA:
            return Object.assign({}, state, { edgeData: action.payload.edge });
        default:
            return state;
    }
};

export default nodemap;