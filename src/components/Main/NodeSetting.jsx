// import { useState } from "react"
import { useDispatch } from 'react-redux';
import React from 'react'
// import { modal } from '../../redux/modalstatus'
import { useSelector } from 'react-redux';
import { closeNodesettingModal, openNodeoptionModal } from '../../redux/modalstatus';

const NodeSetting = () => {
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
    // const [profileIsOpen, setprofileIsOpen] = useState(false);
    // //노드 추가 하기
    const handleAddnode = () => {
        //서버요청 후 반영
        dispatch(closeNodesettingModal());
        dispatch(openNodeoptionModal());
    }
    // const handleDeletenode = () => {
    //     //서버요청 후 반영
    //     dispatch();
    // }
    // const handleUpdatenode = () => {
    //     //서버요청 후 반영
    //     dispatch();
    // }
    return (
            <div id='node-setting-container' style={{left: x, top: y}}>
                <ion-icon name="pencil-sharp"></ion-icon>
                <div className="splitter"></div>
                <ion-icon name="add-sharp" onClick={handleAddnode}></ion-icon>
                <div className="splitter"></div>
                <ion-icon name="trash-outline"></ion-icon>
                <div className="splitter"></div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
    )
}

export default NodeSetting