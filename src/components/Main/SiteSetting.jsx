import { useState , useEffect} from "react"
import React from "react"
import {useDispatch, useSelector} from 'react-redux'
import {closeSettingModal} from '../../redux/modalstatus'
import {changeColor, changeFont} from '../../redux/setting'
import axios from 'axios';

const SiteSetting = ()=>{
    let SERVER_API = process.env.REACT_APP_SERVER_API
    
    const [siteColor, setSiteColor] = useState("");
    const [siteFont, setSiteFontSize] = useState("")

    let dispatch = useDispatch()
    // let userinfo = useSelector(state=>state.userinfo)
    let setting = useSelector(state=>state.setting)


    const fontHandler = (e)=>{
        setSiteFontSize(e.target.innerText)
    }

    const colorHandler = (e)=>{
        setSiteColor(document.defaultView.getComputedStyle(e.target).getPropertyValue('background-color'))
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(siteFont){
            axios
            .post(
                `${SERVER_API}/users/userinfo`,
                {
                    siteFont,
                },
                {
                    headers: {
                        'authorization' : `Bearer ${token}`,
                    }
                }
            )
            .then(
                dispatch(changeFont(siteFont))
            )
        }
    }
    ,[siteFont])
    

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(siteColor){
            axios
        .post(
            `${SERVER_API}/users/userinfo`,
            {
                siteColor
            },
            {
                headers: {
                    'authorization' : `Bearer ${token}`
                }
            }
        )
        .then(
            dispatch(changeColor(siteColor))
        )
        }
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
                            <div onClick={fontHandler}
                            className={setting.siteFont ==='12px' ?
                        'selected':null}>12px</div>
                            <div onClick={fontHandler}
                            className={setting.siteFont ==='16px' ?
                        'selected':null}>16px</div>
                            <div onClick={fontHandler}
                            className={setting.siteFont ==='20px' ?
                        'selected':null}>20px</div>
                            <div onClick={fontHandler}
                            className={setting.siteFont ==='24px' ?
                        'selected':null}>24px</div>
                            <div onClick={fontHandler}
                            className={setting.siteFont ==='28px' ?
                        'selected':null}>28px</div>
                            <div onClick={fontHandler}
                            className={setting.siteFont ==='32px' ?
                        'selected':null}>32px</div>
                        </div>
                    </div>
                </div>
                <div className="splitter"></div>
                <div className='sitesetting-color'>
                    <p>Background Color</p>
                    <div className='colors'>
                        <div className={setting.siteColor === "rgb(255, 204, 188)" ? "black selected" : "black"} onClick={colorHandler}></div>
                        <div className={setting.siteColor === "rgb(239, 154, 154)" ? "red selected" : "red"} onClick={colorHandler}></div>
                        <div className={setting.siteColor === "rgb(178, 223, 219)" ? "yellow selected" : "yellow"} onClick={colorHandler}></div>
                        <div className={setting.siteColor === "rgb(222, 222, 222)" ? "blue selected" : "blue"} onClick={colorHandler}></div>
                        <div className={setting.siteColor === "rgb(232, 245, 233)" ? "green selected" : "green"} onClick={colorHandler}></div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}

export default SiteSetting