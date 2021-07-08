import  React, { useRef, useEffect } from "react";
import { runForceGraph } from "./forceGraphGenerator";
import { useDispatch, useSelector } from 'react-redux';
// import { fetchData, getNodeData, postEdgeData } from "../../../redux/node"; //노드 리듀서
import { openNodeoptionModal } from "../../../redux/modalstatus"; //노드 리듀서
import { setParentnode, setNodeData, handleLoadingOn } from "../../../redux/node";

import axios from "axios";
import "./_forceGraph.scss";
import { setEdgeData } from '../../../redux/edge';




function ForceGraph({ nodesData, linksData, nodeHoverTooltip }) {
    const containerRef = useRef(null);//Div 선택자
    
    let destroyFn;
    
    const dispatch = useDispatch();
    const { nodeData } = useSelector(state => state.node);
    
    // const edgeData = useSelector(state => state.edgeData);
    
    //노드 옵션 모달 오픈
    const handleNodeoptionModal = () => {
        dispatch(openNodeoptionModal());
    }
    //부모 노드 지정
    const setParentNode = (d) => {
        console.log(d);
        dispatch(setParentnode(d));
    }
    //초기 데이터 세팅
    const loadNodemapData = () => {
        dispatch(handleLoadingOn());
        axios.get('https://kiwimap.shop/nodemap/node',
            { withCredentials: true }
        )
            .then(res => res.data)
            .then(data => {
                console.log(data);
                if (data.message === 'internal server error') {
                    alert('서버가 정상적으로 동작하지 않습니다.')
                } else {
                    dispatch(setNodeData(data.nodeData));
                }
            }).then(() => {
                axios.get('https://kiwimap.shop/nodemap/edge',
                    { headers: { withCredentials: true } }
                )
                    .then(res => res.data)
                    .then(data => {
                        console.log(data);
                        if (data.message === 'internal server error') {
                            alert('서버가 정상적으로 동작하지 않습니다.')
                        } else {
                            setEdgeData(data.edgeData);
                        }
                    })
                    .catch(e => console.log(e));
            })
            .catch(e => console.log(e));
    }
    
    useEffect(() => {
        loadNodemapData();
    }, [])
    
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
                nodeHoverTooltip,
                handleNodeoptionModal,
                setParentNode,
            );
            
            destroyFn = destroy;
        }
        return destroyFn;
    },[nodeData]);
    //컴포넌트가 화면에서 사라질 때
    return <div ref={containerRef} className="container"/>;
}

export default ForceGraph;