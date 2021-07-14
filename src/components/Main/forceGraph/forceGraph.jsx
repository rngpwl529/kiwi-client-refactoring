import  React, { useRef, useEffect } from "react";
import { runForceGraph } from "./forceGraphGenerator";
import { useDispatch, useSelector } from 'react-redux';
// import { fetchData, getNodeData, postEdgeData } from "../../../redux/node"; //노드 리듀서
import { setParentnode } from "../../../redux/nodemap"; //노드 리듀서
import { openNodesettingModal, openSigninModal } from "../../../redux/modalstatus";
import styles from "./forceGraph.module.css";






function ForceGraph() {
    const containerRef = useRef(null);
    const dispatch = useDispatch();

    const { nodeData } = useSelector(state => state.node);
    const { edgeData } = useSelector(state => state.node);
    const { siteFont } = useSelector(state => state.setting);
    const { isSignIn } = useSelector(state => state.sign);
    
    
    
    console.log("forceGraph");
    // const edgeData = useSelector(state => state.edgeData);
    
    //노드 옵션 모달 오픈
    const handleNodesettingModal = (node, xCord, yCord) => {
        if (!isSignIn) {
            dispatch(openSigninModal());
        } else {
            dispatch(setParentnode({
                id: node.id,
                nodeName: node.nodeName,
                nodeColor: node.nodeColor
            }));
            // id: 9, name: "Iris", gender: "female", color: "beige"
            dispatch(openNodesettingModal(xCord, yCord));
        }
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
        let destroyFn;
        if (containerRef && nodeData.slice(-1) !== undefined) {
            const { destroy } = runForceGraph(
                containerRef.current,
                nodeData,
                edgeData,
                handleNodesettingModal,
            );
            destroyFn = destroy;
        }
        return destroyFn;
    }, [edgeData]);
    //컴포넌트가 화면에서 사라질 때
    return <div ref={containerRef} className={styles.container} style={{fontSize: siteFont}}/>;
}

export default ForceGraph;