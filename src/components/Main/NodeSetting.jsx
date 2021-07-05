// import { useState } from "react"
import React from "react"
const NodeSetting = ()=>{

    // const [profileIsOpen, setprofileIsOpen] = useState(false);

    return (
        <div>
            <span>
                <img alt="create" onClick={()=>{alert('create')}}/>
            </span>
            <span>
                <img alt="edit" onClick={()=>{alert('edit')}}/>
            </span>
            <span>
                <img alt="delete" onClick={()=>{alert('delete')}}/>
            </span>
        </div>
    )
}
  
export default NodeSetting