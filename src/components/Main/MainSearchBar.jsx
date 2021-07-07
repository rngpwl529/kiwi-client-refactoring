import { useState, React } from "react";
import TrendKeyword from "./TrendKeyword";

const MainSearchBar = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(true);

    const handler = () => {
        console.log(searchTerm);
    }

    return (
        <div id='main-search'>
            <input type="text" onClick={()=>{setIsOpen(true)}} onChange={(event)=>{setSearchTerm(event.target.value)}}/>
            <ion-icon name="search-outline" onClick={handler}></ion-icon>
            {isOpen? <TrendKeyword></TrendKeyword>: false}
        </div>
    )
}

export default MainSearchBar