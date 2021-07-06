import React from "react";
import { runForceGraph } from "./forceGraphGenerator";
import "./_forceGraph.scss";


function ForceGraph({ linksData, nodesData, nodeHoverTooltip }) {
    const containerRef = React.useRef(null);
    let destroyFn;

    
    React.useEffect(() => {
        if (containerRef.current) {
            const { destroy } = runForceGraph(
                containerRef.current,
                linksData,
                nodesData,
                nodeHoverTooltip
            );
            // eslint-disable-next-line
            destroyFn = destroy;
        }
        return destroyFn;
    },[nodesData]);
    return <div ref={containerRef} className="container" />;
}

export default ForceGraph;