import  React, { useRef, useEffect } from "react";
// import { runForceGraph } from "./forceGraphGenerator";
import { useDispatch, useSelector } from 'react-redux';
// import { fetchData, getNodeData, postEdgeData } from "../../../redux/node"; //노드 리듀서
import { setParentnode } from "../../../redux/nodemap"; //노드 리듀서
import { openNodesettingModal, openSigninModal } from "../../../redux/modalstatus";
import styles from "./forceGraph.module.css";
import GraphOption from './GraphOption'
import * as d3 from "d3";
import { select } from 'd3';
function ForceGraph() {
    // const containerRef = useRef(null);
    const dispatch = useDispatch();

    const { parentNode } = useSelector(state => state.node);
    const { nodeData } = useSelector(state => state.node);
    const { edgeData } = useSelector(state => state.node);
    const { siteFont } = useSelector(state => state.setting);
    const { isSignIn } = useSelector(state => state.sign);
    
    console.log(parentNode)
    
    // console.log(nodeData, edgeData);
    console.log("forceGraph");
    // const edgeData = useSelector(state => state.edgeData);
    
    //노드 옵션 모달 오픈
    const handleNodesettingModal = (node, xCord, yCord, /* transform */) => {
        // console.log(transform);
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
    // console.log(parentNode);

    
    // useEffect(() => {
    //     //처음 render 됐을 때, 그리고 업데이트 될때마다 재렌더
    //     let destroyFn;
    //     if (containerRef) {
    //         console.log(nodeData.length);
    //         console.log(edgeData.length);
    //         const { destroy } = runForceGraph(
    //             containerRef.current,
    //             nodeData,
    //             edgeData,
    //             handleNodesettingModal,
    //         );
    //         destroyFn = destroy;
    //     }
    //     return destroyFn;
    // }, [nodeData,edgeData]);
    const svgRef = useRef(null);

  useEffect(()=>{
    const svg = svgRef.current; // selection 객체
    const svgRect = svgRef.current.getBoundingClientRect(); //container 영역
    const height = svgRect.height;                     //container 높이
    const width = svgRect.width;                       //container 너비
    
    console.log(height, width)
    
    const g = d3.select(svg)
    .append("g")
    // .attr("viewBox", [0, 0, width, height]) // container 위치
    .attr("transform","translate("+[width/2, height/2]+") scale(1)")
    .attr('class','box')
    // .call(d3.zoom().on("zoom", function () {
    //     g.attr("transform","translate("+[height/2+d3.event.transform.x ,width/2+d3.event.transform.y]+") scale("+d3.event.transform.k+")")
    // }))

    d3.select(svg)
    .call(d3.zoom().on("zoom", function () {
        g.attr("transform","translate("+[height/2+d3.event.transform.x ,width/2+d3.event.transform.y]+") scale("+d3.event.transform.k+")")
    }))

    g.append('g').attr('class','links')
    g.append('g').attr('class','nodes')
    g.append('g').attr('class','labels')
    },[])

    useEffect(() => {
    // const links = edgeData.map((d) => Object.assign({}, d));//link data
    // const nodes = nodeData.map((d) => Object.assign({}, d)); //nodes data
    //drag 액션 정의
    const drag = (simulation) => {
    const dragstarted = (d) => {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    };

    const dragged = (d) => {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    };

    const dragended = (d) => {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    };
    //drag 액션 리턴
    return d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
};


    //simulation 그리기
    const simulation = d3
        .forceSimulation(nodeData)
        .force(
            "link",
            d3.forceLink(edgeData).id((d) => d.id)
        )
        .force("charge", d3.forceManyBody().strength(-500)) // force 정도
        .force("x", d3.forceX())
        .force("y", d3.forceY())
        
        
        // if (d3.select("svg")) {
        //     d3.select("svg").remove();
        // }
    // 컨테이너 그리기

    const linkGroup = select('.links')
    // 링크 그리기
    const link = linkGroup
        .attr("stroke", "#999")               //링크 색깔
        .attr("stroke-opacity", 0.6)          //링크 투명도
        .selectAll("line")                    //라인을 모두잡아서
        .data(edgeData)
        // .enter()
        // .append('line')                          //데이터를 연결함
        .join("line")                         //line이랑 합침
        .attr("stroke-width", (d) => d.value);//링크 두께
        
    const nodeGroup = select('.nodes')
    const node = nodeGroup
    // .append("g")
    .attr("stroke", "#fff")                            //노드 외곽선 색
    .attr("stroke-width", 0.1)                           //노드 외곽선 두께
    .selectAll("circle")                               //원을 모두 잡아서
    .data(nodeData)                                       //데이터를 넣음                
    .call(log,'enter')
    .join("circle")                                    //원과 합침
    .attr("r", () => { return 30; }) // 원 반지름
    .attr("fill", (d) => { return d.nodeColor; })          // 원 컬러
    .attr("id", (d) => {                               //속성 id값
        return d.nodeName;
    })
    .on("click", (d) => {
        console.log(d3.select('g'));
        handleNodesettingModal(d, d3.event.x, d3.event.y);
    })
    .call(drag(simulation));
    //노드 버블 그리기
    
    function log(sel,msg) {
        console.log(msg,sel);
    }

    d3.select('#distance').on('input',()=>{
        let value = d3.select('#distance').property('value')
        simulation.alpha(1)
        simulation.force('link').distance(+value)
    })

    d3.select('#strength').on('input',()=>{
        let value = d3.select('#strength').property('value')
        simulation.alpha(1)
        simulation.force('charge',d3.forceManyBody().strength(-value))
    })
        
    const labelGroup = select('.labels')
    // 텍스트 라벨링 그리기
    const label = labelGroup
        // .append("g")
        // .attr("class", "labels")
        .selectAll("text")
        .data(nodeData)
        // .append("text")
        .join('text')
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "central")
        .attr("class", (d) => d.nodeName)
        .text((d) => {
            return d.nodeName;
        })
        .on("click", (d) => {
            handleNodesettingModal(d, d3.event.x, d3.event.y);
        });

    // label
    //     .on("mouseover", (d) => {
    //         addTooltip(d, d3.event.pageX, d3.event.pageY, nodeHoverTooltip);
    //     })
    //     .on("mouseout", () => {
    //         removeTooltip();
    //     });

    simulation.on("tick", () => {
        link.attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

    //노드 위치 업데이트
    node.attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y);

    //라벨링 위치 업데이트
    label
        .attr("x", (d) => {
            return d.x;
        })
        .attr("y", (d) => {
            return d.y;
        });
    });
}, [nodeData,edgeData]);
    //컴포넌트가 화면에서 사라질 때
    
    return (
        <>
            <div  className={styles.container} style={{fontSize: siteFont}}>
                <svg ref={svgRef} />
            </div>
            <GraphOption />
        </>
    )
}

export default ForceGraph;