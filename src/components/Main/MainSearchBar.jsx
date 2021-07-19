import { useRef } from 'react';
import React from "react";
// import TrendKeyword from "./TrendKeyword";
import * as d3 from "d3";


const MainSearchBar = () => {
    
    let searchTerm = useRef();
    const handler = () => {
        let input = document.querySelector('#main-search input')
        let logo = document.querySelector('#header a')
        logo.classList.toggle('invisible')
        input.placeholder = 'input text'
        input.classList.toggle('focus')
    }

    const searchHandler = (e)=>{
        if(e.key === 'Enter'){
            let nodeData = document.getElementsByClassName(`${e.target.value}`)[0]
            if(!nodeData){
                alert('no result')
            }
            else{
                let g = d3.select('.box')
                let box = document.querySelector('svg')
                let height = Number(document.defaultView.getComputedStyle(box).getPropertyValue('height').slice(0,-2))
                let width = Number(document.defaultView.getComputedStyle(box).getPropertyValue('width').slice(0,-2))
                console.log(width)
                g.transition().duration(1000)
                .attr('transform',"translate("+[width/2-nodeData.__data__.x*3,height/2-nodeData.__data__.y*3]+") scale(3)")
                // svg.transition().duration(1000)
                // .attr("transform","translate("+[-nodeData.__data__.x, -nodeData.__data__.y]+") scale(1)")
            }
        }
    }

    return (
        <div id='main-search'>
            <input type="text" ref={searchTerm} onKeyDown={searchHandler}/>
            <ion-icon name="search-outline" onClick={handler}></ion-icon>
            {/* <TrendKeyword></TrendKeyword> */}
        </div>
    )
}

export default MainSearchBar