// import { useState } from "react"
import React from 'react'
const NodeSetting = ()=>{

    // const [profileIsOpen, setprofileIsOpen] = useState(false);

    return (
        <div id='node-setting-container'>
                <ion-icon name="pencil-sharp"></ion-icon>
                <div className="splitter"></div>
                <ion-icon name="add-sharp"></ion-icon>
                <div className="splitter"></div>
                <ion-icon name="trash-outline"></ion-icon>
                <div className="splitter"></div>
                <ion-icon name="bookmark-outline"></ion-icon>
        </div>
    )
}

export default NodeSetting