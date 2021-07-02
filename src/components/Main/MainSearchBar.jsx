import { useState } from "react"

const MainSearchBar = ()=>{

    const [searchTerm, setSearchTerm] = useState("");
    const handler = ()=>{
    }
    return (
        <div id='main-search'>
            <input type="text" onChange={(event)=>{setSearchTerm(event.target.value)}}/>
            <ion-icon name="search-outline" onClick={handler}></ion-icon>
        </div>
    )
}

export default MainSearchBar