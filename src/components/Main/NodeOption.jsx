import { useRef } from "react"
import React from "react"
import "./_NodeOption.scss" //임시 스타일

const NodeOption = ()=>{

    let nodeName = useRef();

    const color = "red";
    return (
        <div className='darkbackground'>
            <div className='nodeoption-container'>
                <div className='nodeoption-x-box'>
                    <div></div>
                    <div className='nodeopton-x'>X</div>
            </div>
            <header>Add a New Node</header>
            <div className='node-name'>
                <span>Nodename</span>
                <input type="text" placeholder='NodeName' ref={nodeName}></input>
            </div>
            <div className='parent-node'>
                <span>Parent Node</span>
                <span>기본 노드 값</span>
            </div>
            <div className='setting-node-colors'>
              <p>노드 색</p>
              <div className='colors'>
                <div className={color === 'blue' ? 'blue selected' : 'blue'} />
                <div className={color === 'red' ? 'red selected' : 'red'} />
                <div className={color === 'orange' ? 'orange selected' : 'orange'} />
                <div className={color === 'yellow' ? 'yellow selected' : 'yellow'} />
              </div>
            </div>
                <button onClick={() => { alert(`${nodeName} 추가`) }}>추가</button>
                
            </div>
        </div>
    )
}
  
export default NodeOption