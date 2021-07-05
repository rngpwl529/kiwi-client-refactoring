//액션
const HANDLE_NODEMAP_DATA = "HANDLE_NODEMAP_DATA";
const HANDLE_NODE_DATA = "HANDLE_NODE_DATA";
const HANDLE_EDGE_DATA = "HANDLE_EDGE_DATA";


//액션생성함수
const handleNodemapData = (nodemap) => ({
    type: HANDLE_NODEMAP_DATA,
    payload: {
        nodemap
    }
});
const handleNodeData = (node) => ({
    type: HANDLE_NODE_DATA,
    payload: {
        node
    }
});
const handleEdgeData = (edge) => ({
    type: HANDLE_EDGE_DATA,
    payload: {
        edge
    }
});

//리듀서
const nodemapData = (state, action) => {
    switch (action.type) {
        case HANDLE_NODEMAP_DATA:
            return Object.assign({}, state, { nodemapData: action.payload.nodemap });
        default:
            return state;
    }
};

const nodeData = (state, action) => {
    switch (action.type) {
        case HANDLE_NODE_DATA:
            return Object.assign({}, state, { nodeData: action.payload.node });
        default:
            return state;
    }
};

const edgeData = (state, action) => {
    switch (action.type) {
        case HANDLE_EDGE_DATA:
            return Object.assign({}, state, { edgeData: action.payload.edge });
        default:
            return state;
    }
};