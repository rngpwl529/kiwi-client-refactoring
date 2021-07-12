import { useState, useEffect} from "react"
import React from "react"
import {useDispatch, useSelector} from 'react-redux'
import {closeSettingModal} from '../../redux/modalstatus'
import axios from 'axios';

const SiteSetting = ()=>{
    let SERVER_URL = process.env.REACT_APP_SERVER_URL
    
    const [siteColor, setSiteColor] = useState("");
    const [siteFont, setSiteFontSize] = useState("")
    let dispatch = useDispatch()
    let userinfo = useSelector(state=>state.userinfo)

    const fontHandler = (e)=>{
        console.log(e.target.innerText)
        setSiteFontSize(e.target.innerText)
    }

    useEffect(()=>{
        axios
        .post(
            `${SERVER_URL}/users/userinfo`,
            {
                id:userinfo.id,
                siteFont,
            }
        )
        .then(res=>{
            console.log(res)
        })
    }
    ,[siteFont])
    


    useEffect(()=>{
        axios
        .post(
            `${SERVER_URL}/users/userinfo`,
            {
                id:userinfo.id,
                siteColor
            }
        )
        .then(res=>{
            console.log(res)
        })
    }
    ,[siteColor])
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
                            <div onClick={fontHandler}>12px</div>
                            <div onClick={fontHandler}>16px</div>
                            <div onClick={fontHandler}>20px</div>
                            <div onClick={fontHandler}>24px</div>
                            <div onClick={fontHandler}>28px</div>
                            <div onClick={fontHandler}>32px</div>
                        </div>
                    </div>
                </div>
                <div className="splitter"></div>
                <div className='sitesetting-color'>
                    <p>Background Color</p>
                    <div className='colors'>
                        <div className={siteColor === "black" ? "black selected" : "black"} onClick={()=>{
                            setSiteColor("black")}}></div>
                        <div className={siteColor === "red" ? "red selected" : "red"} onClick={()=>{
                            setSiteColor("red")}}></div>
                        <div className={siteColor === "yellow" ? "yellow selected" : "yellow"} onClick={()=>{
                            setSiteColor("yellow")}}></div>
                        <div className={siteColor === "blue" ? "blue selected" : "blue"} onClick={() => {
                            setSiteColor("blue")}}></div>
                        <div className={siteColor === "green" ? "green selected" : "green"} onClick={()=>{
                            setSiteColor("green")}}></div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}

export default SiteSetting