import { useState } from "react"

const MainSearchBar = ()=>{

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <input type="search" onChange={(event)=>{setSearchTerm(event.target.value)}}/>
            <span>
                <img alt="search" onClick={()=>{alert(`search: ${searchTerm}`)}}/>
            </span>
        </div>
    )
}
  
export default MainSearchBar