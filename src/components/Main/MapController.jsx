import React from "react"
import * as d3 from "d3"
const MapController = () => {
    const handler = ()=>{
        let nodeData = document.getElementsByClassName(`Trend`)[0]
        let g = d3.select('.box')
        let box = document.querySelector('svg')
        let height = Number(document.defaultView.getComputedStyle(box).getPropertyValue('height').slice(0,-2))
        let width = Number(document.defaultView.getComputedStyle(box).getPropertyValue('width').slice(0,-2))
        g.transition().duration(1000)
        .attr('transform',"translate("+[width/2-nodeData.__data__.x*3,height/2-nodeData.__data__.y*3]+") scale(3)")
    }

    return (
        <div id='control-box'>
            {/* <span>
                <ion-icon name="arrow-undo" ></ion-icon>
            </span> */}
            <div className='splitter'></div>
            <span>
                <ion-icon name="home" onClick={()=>{handler()}}></ion-icon>
            </span>
            {/* <div className='splitter'></div>
            <span>
                <ion-icon name="arrow-redo" onClick={()=>{alert('back')}}></ion-icon>
            </span> */}
        </div>
    )
}

export default MapController