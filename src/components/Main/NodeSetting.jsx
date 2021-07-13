// import { useState } from "react"
import { useDispatch } from 'react-redux';
import React from 'react'
// import { modal } from '../../redux/modalstatus'
import { useSelector } from 'react-redux';
import {  openNodeoptionModal } from '../../redux/modalstatus';
import {addBookmarkKeyword} from '../../redux/userinfo'
import axios from 'axios'
// import { deleteNodeData } from '../../redux/node';

const NodeSetting = () => {
    let SERVER_API = process.env.REACT_APP_SERVER_API
    let x, y;
    let value = useSelector(state => state.modal.nodesettingModal);
    if (value) {
        [x, y] = value;
        x += 'px';
        y += 'px';
    } else {
        x = 0;
        y = 0;
    }
    const dispatch = useDispatch();
    const parentNode = useSelector(state=>state.node.parentNode)
    let state = useSelector(state=>state)
    const addKeywrodHandler=()=>{
        axios
        .post(
            `${SERVER_API}/users/keyword`,
            {
                userId: state.userinfo.id,
                keyword: parentNode.nodeName
            }
        ).then(res=>{
            console.log(res)
            dispatch(addBookmarkKeyword(parentNode.name))
        }
        ).catch(err=>{
            console.log(err.statusCode)
            alert('이미 존재하는 키워드 입니다.')
        })
    }
    // const [profileIsOpen, setprofileIsOpen] = useState(false);
    // //노드 추가 하기
    const handleAddnode = () => {
        //서버요청 후 반영
        dispatch(openNodeoptionModal());
    }
    // const handleDeletenode = () => {
    //     //서버요청 후 반영
    //     dispatch(deleteNodeData(parentNode.id));
    //     axios.post(
    //     `${SERVER_URL}/users/keyword`,
    //     {
    //         userId: state.userinfo.id,
    //         keyword: parentNode.name
    //     }
    // ).then(res=>{
    //     console.log(res)
    //     dispatch(addBookmarkKeyword(parentNode.name))
    // }
    // ).catch(err=>{
    //     console.log(err.statusCode)
    //     alert('이미 존재하는 키워드 입니다.')
    // })
    // }
    // const handleUpdatenode = () => {
    //     //서버요청 후 반영
    //     dispatch();
    // }
    return (
        <div id="nodesetting-darkbackground" >
            <div id='node-setting-container' style={{left: x, top: y}}>
                <ion-icon name="pencil-sharp"></ion-icon>
                <div className="splitter"></div>
                <ion-icon name="add-sharp" onClick={()=>{ handleAddnode(); }}></ion-icon>
                <div className="splitter"></div>
                <ion-icon name="trash-outline"></ion-icon>
                <div className="splitter"></div>
                <ion-icon name="bookmark-outline" onClick={addKeywrodHandler}></ion-icon>
            </div>
        </div>
    )
}

export default NodeSetting