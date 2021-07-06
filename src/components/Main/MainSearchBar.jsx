import { useState } from "react"
import React from "react"
const MainSearchBar = ()=>{

    const [searchTerm, setSearchTerm] = useState(""); //검색 API필요
    const handler = () => {
        console.log(searchTerm);
    }
    return (
        <div id='main-search'>
            <input type="text" onChange={(event)=>{setSearchTerm(event.target.value)}}/>
            <ion-icon name="search-outline" onClick={handler}></ion-icon>
        </div>
    )
}

export default MainSearchBar