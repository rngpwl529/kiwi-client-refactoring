import  React, { useRef, useEffect } from "react";
import { runForceGraph } from "./forceGraphGenerator";
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchData, getNodeData, postEdgeData } from "../../../redux/node"; //노드 리듀서
//
import "./_forceGraph.scss";




function ForceGraph({ linksData, nodesData, nodeHoverTooltip }) {
    const containerRef = useRef(null);//Div 선택자
    let destroyFn;
    // redux-store 상태 조회
    // const isOpenNodeoptionModal = useSelector((state)=> state.nodeoptionModal);
    // const isOpenNodesettingModal = useSelector((state)=> state.nodesettingModal);
    // const nodeData = useSelector((state) => state.nodeData);
    // const edgeData = useSelector((state) => state.edgeData);

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     //처음 render 됐을 때,
    //     //store에서 nodes와 edges를 가지고 옴
    //     dispatch(fetchData('http://localhost:80/nodemap/node', setNodeData));
    //     dispatch(fetchData('http://localhost:80/nodemap/edge', setEdgeData));
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
    return <div ref={containerRef} className="container"/>;
}

export default ForceGraph;