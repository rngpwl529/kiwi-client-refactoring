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

    const { parentNode } = useSelector(state => state.node);
    const { nodeData } = useSelector(state => state.node);
    const { edgeData } = useSelector(state => state.node);
    const { siteFont } = useSelector(state => state.setting);
    const { isSignIn } = useSelector(state => state.sign);
    
    
    console.log(nodeData, edgeData);
    console.log("forceGraph");
    // const edgeData = useSelector(state => state.edgeData);
    
    //노드 옵션 모달 오픈
    const handleNodesettingModal = (node, xCord, yCord, transform) => {
        console.log(transform);
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
    console.log(parentNode);

    useEffect(() => {
        //처음 render 됐을 때, 그리고 업데이트 될때마다 재렌더
        let destroyFn;
        if (containerRef) {
            console.log(nodeData.length);
            console.log(edgeData.length);
            const { destroy } = runForceGraph(
                containerRef.current,
                nodeData,
                edgeData,
                handleNodesettingModal,
            );
            destroyFn = destroy;
        }
        return destroyFn;
    }, [nodeData, edgeData]);
    //컴포넌트가 화면에서 사라질 때
    return <div ref={containerRef} className={styles.container} style={{fontSize: siteFont}}/>;
}

export default ForceGraph;