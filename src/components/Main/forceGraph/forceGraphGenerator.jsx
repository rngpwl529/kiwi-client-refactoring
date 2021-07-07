import * as d3 from "d3";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./_forceGraph.scss";
// import React from "react";
export function runForceGraph(
    container, //박스
    linksData, //edge
    nodesData, //node
    nodeHoverTooltip //hover툴팁
) {
    // let [clicked, setClick] = React.useState(null);
    const links = linksData.map((d) => Object.assign({}, d));//link data
    const nodes = nodesData.map((d) => Object.assign({}, d));//nodes data
    const containerRect = container.getBoundingClientRect(); //container 영역
    const height = containerRect.height;                     //container 높이
    const width = containerRect.width;                       //container 너비

    // const color = () => {
    //     return "red";
    // };

    // const icon = (d) => {
    //     return d.gender === "male" ? "\uf222" : "\uf221";
    // };

    // const getClass = (d) => {
    //     return d.gender === "male" ? styles.male : styles.female;
    // };
    
    
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

    // 그래프 툴팁
    const tooltip = document.querySelector("#graph-tooltip");
    if (!tooltip) {
        const tooltipDiv = document.createElement("div");
        tooltipDiv.classList.add(styles.tooltip);
        tooltipDiv.style.opacity = "0";
        tooltipDiv.id = "graph-tooltip";
        document.body.appendChild(tooltipDiv);
    }
    const div = d3.select("#graph-tooltip");

    const addTooltip = (d, x, y, callback) => {
        div.transition().duration(200).style("opacity", 0.9);
        div.html(callback(d, x, y))
            .style("left", `${x}px`)
            .style("top", `${y - 28}px`);
    };

    const removeTooltip = () => {
        div.transition().duration(1000).style("opacity", 0);
    };

    //simulation 그리기
    const simulation = d3
        .forceSimulation(nodes)
        .force(
            "link",
            d3.forceLink(links).id((d) => d.id)
        )
        .force("charge", d3.forceManyBody().strength(-500)) // force 정도
        .force("x", d3.forceX())
        .force("y", d3.forceY());
    
    
    // 컨테이너 그리기
    const svg = d3
        .select(container) 
        .append("svg")
        .attr("viewBox", [-width/2, -height/2, width, height]) // container 위치
        .call(
            d3.zoom().on("zoom", function () { // zoom 기능
                svg.attr("transform", d3.event.transform);
            })
        );
    // 링크 그리기
    const link = svg
        .append("g")
        .attr("stroke", "#999")               //링크 색깔
        .attr("stroke-opacity", 0.6)          //링크 투명도
        .selectAll("line")                    //라인을 모두잡아서
        .data(links)                          //데이터를 연결함
        .join("line")                         //line이랑 합침
        .attr("stroke-width", (d) => d.value);//링크 두께
    //노드 버블 그리기
    const node = svg 
        .append("g")
        .attr("stroke", "#fff")                            //노드 외곽선 색
        .attr("stroke-width", 3)                           //노드 외곽선 두께
        .selectAll("circle")                               //원을 모두 잡아서
        .data(nodes)                                       //데이터를 넣음
        .join("circle")                                    //원과 합침
        .attr("r", (d) => { return d.name.length * 4.5; }) // 원 반지름
        .attr("fill", (d) => { return d.color; })          // 원 컬러
        .attr("id", (d) => {                               //속성 id값
            return d.name;
        })
        .on("click", function (d) {
            console.log(d.name);
            //클릭이벤트 노드버블
        })
        .call(drag(simulation));
        
        
    // 텍스트 라벨링 그리기
    const label = svg 
        .append("g")
        .attr("class", "labels")
        .selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "central")
        .attr("class", (d) => d.name)
        .text((d) => {
            return d.name;
        })

    label
        .on("mouseover", (d) => {
            addTooltip(d, d3.event.pageX, d3.event.pageY, nodeHoverTooltip);
        })
        .on("mouseout", () => {
            removeTooltip();
        });

    simulation.on("tick", () => {
        //링크 위치 업데이트
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

    return {
        destroy: () => {
            simulation.stop();
        },
        nodes: () => {
            return svg.node();
        },
    };
}
