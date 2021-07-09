import { useRef, useState } from "react"
import React from "react"
import { useSelector, useDispatch } from 'react-redux';
import { closeNodeoptionModal } from '../../redux/modalstatus'
import axios from 'axios';



const NodeOption = ()=>{
    // let SERVER_URL = process.env.REACT_APP_SERVER_URL;
    let nodeName = useRef();
    const dispatch = useDispatch();
    const [color, setColor] = useState("");
    // const [nodeName, setNodeName] = useState("")
    const { parentNode } = useSelector(state => state.node);
    const closeModal = () => {
        dispatch(closeNodeoptionModal());
    }
    const submitHandler = ()=>{
        axios.post("https://kiwimap.shop/nodemap/edge",
            { nodeColor: color, nodeName: nodeName.current.value },
            { headers: { withCredentials: true } })
            .then(res => res.data)
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    return (
        <div className='nodeoption-darkbackground'>
            <div className='nodeoption-container'>
                <div className='nodeoption-x-box'>
                    <i className="iconCancel" role="img" aria-label="cancle" onClick={() => { closeModal(); }}></i>
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
                <span>{parentNode}</span>
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
                    <div className='nodeaddBtn' onClick={() => { submitHandler(); }}><span>ADD</span></div>
        </section>
    </div>
</div>
    )
}
  
export default NodeOption