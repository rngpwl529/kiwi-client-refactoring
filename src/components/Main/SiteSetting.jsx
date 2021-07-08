import { useState, useEffect } from "react"
import React from "react"
import {useDispatch} from 'react-redux'
import {closeSettingModal} from '../../redux/modalstatus'
import axios from 'axios';

const SiteSetting = ()=>{
    let SERVER_URL = process.env.REACT_APP_SERVER_URL
    
    const [backGroundColor, setBackGroundColor] = useState("blue");
    const [fontSize, setFontSize] = useState("24px")
    let dispatch = useDispatch()

    const fontHandler = (e)=>{
        setFontSize(e.target.value)
    }


    useEffect(()=>{
        axios
        .post(
            `${SERVER_URL}/users/setting`,
            {
                email:'a@naver.com',
                backGroundColor,
                fontSize
            }
        )
        .then(
            console.log('사이트설정 성공')
        )
    }
    ,[backGroundColor, fontSize])
    //사이트 세팅 요청 없음

    const closehandler = ()=>{
        dispatch(closeSettingModal())
    }

    return (
        <div className="sitesetting-darkbackground">
            <div className='sitesetting-container'>
            <i className='iconCancel' role='img' aria-label='cancle' onClick={closehandler}></i>
            <header className='sitesetting-header'>
                <span>Site Settings</span>
            </header>
            <section className='sitesetting-setting'>
                <div className='sitesetting-fontsize'>
                    <span>Font Size</span>
                    <div className='sitesetting-slider'>
                        <div className='scale'>
                            <p onClick={fontHandler}>12px</p>
                            <p onClick={fontHandler}>16px</p>
                            <p onClick={fontHandler}>20px</p>
                            <p onClick={fontHandler}>24px</p>
                            <p onClick={fontHandler}>28px</p>
                            <p onClick={fontHandler}>32px</p>
                        </div>
                    </div>
                </div>
                <div className="splitter"></div>
                <div className='sitesetting-color'>
                    <p>Background Color</p>
                    <div className='colors'>
                        <div className={backGroundColor === "black" ? "black selected" : "black"} onClick={()=>{setBackGroundColor("black")}}></div>
                        <div className={backGroundColor === "red" ? "red selected" : "red"} onClick={()=>{setBackGroundColor("red")}}></div>
                        <div className={backGroundColor === "yellow" ? "yellow selected" : "yellow"} onClick={()=>{setBackGroundColor("yellow")}}></div>
                        <div className={backGroundColor === "blue" ? "blue selected" : "blue"} onClick={() => { setBackGroundColor("blue") }}></div>
                        <div className={backGroundColor === "green" ? "green selected" : "green"} onClick={()=>{setBackGroundColor("green")}}></div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}
  
export default SiteSetting