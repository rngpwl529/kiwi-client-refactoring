import  React, { useRef, useEffect } from "react";
import { runForceGraph } from "./forceGraphGenerator";
import { useDispatch, useSelector } from 'react-redux';
// import { fetchData, getNodeData, postEdgeData } from "../../../redux/node"; //노드 리듀서
import { setParentnode } from "../../../redux/node"; //노드 리듀서
import { openNodesettingModal } from "../../../redux/modalstatus";
import "./_forceGraph.scss";





function ForceGraph({ nodesData, linksData, /* nodeHoverTooltip */ }) {
    const containerRef = useRef(null);//Div 선택자
    
    let destroyFn;
    
    const dispatch = useDispatch();
    const { nodeData } = useSelector(state => state.node);
    const { edgeData } = useSelector(state => state.edge);
    const { siteFont } = useSelector(state=>state.setting)
    
    console.log("forceGraph");
    // const edgeData = useSelector(state => state.edgeData);
    
    //노드 옵션 모달 오픈
    const handleNodesettingModal = (node, x, y) => {
        dispatch(setParentnode(node));
        dispatch(openNodesettingModal(x, y));
    }
   
    

    
    // redux-store 상태 조회
    // const isOpenNodeoptionModal = useSelector((state)=> state.nodeoptionModal);
    // const isOpenNodesettingModal = useSelector((state)=> state.nodesettingModal);
    // const nodeData = useSelector((state) => state.nodeData);
    // const edgeData = useSelector((state) => state.edgeData);
    
    
    
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
                // nodeHoverTooltip,
                handleNodesettingModal,
            );
            destroyFn = destroy;
        }
        return destroyFn;
    },[nodeData, edgeData]);
    //컴포넌트가 화면에서 사라질 때
    return <div ref={containerRef} className="container" style={{fontSize: siteFont}}/>;
}

export default ForceGraph;