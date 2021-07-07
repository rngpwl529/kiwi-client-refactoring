import  React, { useEffect } from "react";
import { runForceGraph } from "./forceGraphGenerator";
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchData, getNodeData, postEdgeData } from "../../../redux/nodemap"; //노드맵 리듀서
import "./_forceGraph.scss";




function ForceGraph({ linksData, nodesData, nodeHoverTooltip }) {
    const containerRef = React.useRef(null);
    let destroyFn;
    // const nodeState = useSelector((state) => state.nodemap);
    // const edgeState = useSelector((state) => state.nodemap);
    // const { nodeData } = nodeState;
    // const { edgeData } = edgeState;
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     //처음 render 됐을 때,
    //     //store에서 nodes와 edges를 가지고 옴
    //     dispatch(fetchData('http://localhost:80/nodemap/node', getNodeData));
    //     dispatch(fetchData('http://localhost:80/nodemap/edge', postEdgeData));
    // }, []);

    useEffect(() => {
        //처음 render 됐을 때, 그리고 업데이트 될때마다 재렌더
        if (containerRef.current) {
            const { destroy } = runForceGraph(
                containerRef.current,
                linksData,
                nodesData,
                nodeHoverTooltip
            );
            
            destroyFn = destroy;
        }
        return destroyFn;
    }, [nodesData]);
    //컴포넌트가 화면에서 사라질 때
    return <div ref={containerRef} className="container" />;
}

export default ForceGraph;