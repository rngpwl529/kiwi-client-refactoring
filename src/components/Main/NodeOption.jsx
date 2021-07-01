import { useState } from "react"

const NodeOption = ()=>{

    const [nodename, setNodeName] = useState("")
    return (
        <div>
            <div>새로운 노드 추가</div>
            <div>
                <span>노드 이름</span>
                <input type="search" onChange={(event)=>{setNodeName(event.target.value)}}></input>
            </div>
            <div>
                <span>기본 노드</span>
                <span>{}</span>
            </div>
            <div>
                <span>노드 색상</span>

            </div>
            <button onClick={()=>{alert(`${nodename} 추가`)}}>추가</button>
        </div>
    )
}
  
export default NodeOption