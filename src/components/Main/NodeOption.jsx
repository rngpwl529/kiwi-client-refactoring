import { useRef, useState } from "react"
import React from "react"



const NodeOption = (props)=>{
    // let SERVER_URL = process.env.REACT_APP_SERVER_URL;
    let nodeName = useRef();
    const [color, setColor] = useState("");
    // const [nodeName, setNodeName] = useState("")

    const submitHandler = ()=>{
        
    }

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
                    <div className='nodeoption-nodename-input'><input type="text" placeholder='Node Name' ref={nodeName} onChange={()=>{console.log(nodeName.current.value)}} ></input></div>
            </div>
            <div className='nodeoption-parentnode'>
                <span>Parent Node</span>
                <span>{props.parentNode}</span>
            </div>
            
            <div className='setting-node-colors'>
                <p>Node Color</p>
                    <div className='colors'>
                        <div className={color === 'blue' ? 'blue selected' : 'blue'} onClick={() => {
                                setColor('blue');
                                console.log(color);
                        }} />
                        <div className={color === 'red' ? 'red selected' : 'red'} onClick={() => {
                                setColor('red');
                                console.log(color);
                        }} />
                        <div className={color === 'orange' ? 'orange selected' : 'orange'} onClick={() => {
                                setColor('orange');
                                console.log(color);
                        }}/>
                        <div className={color === 'yellow' ? 'yellow selected' : 'yellow'} onClick={() => {
                                setColor('yellow');
                                console.log(color);
                        }}/>
                        <div className={color === 'green' ? 'green selected' : 'green'} onClick={() => {
                                setColor('green');
                                console.log(color);
                            }} />
                        
                    </div>
                </div>
                </section>
                <section className='nodeoption-footer'>
        <div className='nodeaddBtn' onClick={submitHandler}><span>ADD</span></div>
        </section>
    </div>
</div>
    )
}
  
export default NodeOption