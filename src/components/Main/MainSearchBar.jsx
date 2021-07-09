import { useRef } from 'react';
import React from "react";
// import TrendKeyword from "./TrendKeyword";

const MainSearchBar = () => {
    let searchTerm = useRef();
    const handler = () => {
        console.log(searchTerm.current.value);
    }

    return (
        <div id='main-search'>
            <input type="text" ref={searchTerm}/>
            <ion-icon name="search-outline" onClick={() => { handler() }}></ion-icon>
            {/* <TrendKeyword></TrendKeyword> */}
        </div>
    )
}

export default MainSearchBar