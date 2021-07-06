import { useRef, useState } from "react"
import React from "react"


const NodeOption = ()=>{

    let nodeName = useRef();

    const [color, setColor] = useState("");
    return (
        <div className='nodeoption-darkbackground'>
            <div className='nodeoption-container'>
                <div className='nodeoption-x-box'>
                    <i className="iconCancel" role="img" aria-label="cancle"></i>
                </div>
                <header className='nodeoption-header'>
                    <span>Add a New Node</span>
                </header>
                <section className='nodeoption-setting'>
                    <div className='nodeoption-nodename'>
                    <span>Node Name</span>
                    <div className='nodeoption-nodename-input'><input type="text" placeholder='Node Name' ref={nodeName}></input></div>
            </div>
            <div className='nodeoption-parentnode'>
                <span>Parent Node</span>
                <span>Programming</span>
            </div>
            <div className='setting-node-colors'>
                <p>Node Color</p>
                    <div className='colors'>
                        <div className={color === 'blue' ? 'blue selected' : 'blue'} onClick={() => {
                                setColor('blue');
                        }} />
                        <div className={color === 'red' ? 'red selected' : 'red'} onClick={() => {
                                setColor('red');
                        }} />
                        <div className={color === 'orange' ? 'orange selected' : 'orange'} onClick={() => {
                                setColor('orange');
                        }}/>
                        <div className={color === 'yellow' ? 'yellow selected' : 'yellow'} onClick={() => {
                                setColor('yellow');
                        }}/>
                        <div className={color === 'green' ? 'green selected' : 'green'} onClick={() => {
                                setColor('green');
                            }} />
                        
                    </div>
                </div>
                </section>
                <section className='nodeoption-footer'>
        <div className='nodeaddBtn' onClick={() => { alert(`${nodeName} 추가`) }}><span>ADD</span></div>
        </section>
    </div>
</div>
    )
}
  
export default NodeOption