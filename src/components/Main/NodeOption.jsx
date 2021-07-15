import { useRef, useState } from "react"
import React from "react"
import { useSelector, useDispatch } from 'react-redux';
import { closeNodeoptionModal, closeNodesettingModal } from '../../redux/modalstatus'
import { addNodeData } from '../../redux/nodemap';
// import { addEdgeData } from '../../redux/node';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const NodeOption = ()=>{
    let SERVER_API = process.env.REACT_APP_SERVER_API;
    
    let nodeName = useRef();
    const dispatch = useDispatch();
    const [color, setColor] = useState("");
    const { parentNode } = useSelector(state => state.node);
    const { nodeData } = useSelector(state => state.node);
    // const { edgeData } = useSelector(state => state.node);
    const state = useSelector(state=>state)
    console.log(state)
    // console.log(edgeData);
    const closeModal = () => {
        dispatch(closeNodeoptionModal());
    }

    const submitHandler = () => {
        const token = localStorage.getItem('token');
        dispatch(closeNodesettingModal());
       axios.post(`${SERVER_API}/nodemap/node`,
            {
                nodeColor: color,
                nodeName: nodeName.current.value,
                target: nodeData.length,
                source: parentNode.id
            },
            { headers: { withCredentials: true, 'authorization': `Bearer ${token}` } })
            .then(res => res.data)
            .then(data => {
                dispatch(closeNodeoptionModal());
                dispatch(addNodeData({ ...data.nodeData, id: nodeData.length },
                    { ...data.edgeData }));
                return data;
            })
            .catch(error => {  //TODO:TOKEN확인여부를 가지고 로그인 창을 띄움
                if (error.status === 400) {
                    //! 세션만료 모달, 로그인 해제
                    localStorage.clear();
                   //TODO:로그아웃 해야함
                    window.location.reload();
                    return alert('세션이 만료되었습니다. 다시 로그인 해주세요');
                }
            });
    }
    return (
        <div className='nodeoption-darkbackground'>
            <div className='nodeoption-container'>
                <div className='nodeoption-x-box'>
                <ion-icon name="close-outline" onClick={() => { closeModal(); }}></ion-icon>
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
                <span>{parentNode.nodeName}</span>
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