import { useRef } from 'react';
import React from "react";
// import TrendKeyword from "./TrendKeyword";

const MainSearchBar = () => {
    let searchTerm = useRef();
    const handler = () => {
        let input = document.querySelector('#main-search input')
        let logo = document.querySelector('#header a')
        logo.classList.toggle('invisible')
        input.placeholder = 'input text'
        input.classList.toggle('focus')
    }

    return (
        <div id='main-search'>
            <input type="text" ref={searchTerm}/>
            <ion-icon name="search-outline" onClick={handler}></ion-icon>
            {/* <TrendKeyword></TrendKeyword> */}
        </div>
    )
}

export default MainSearchBar