import { useState } from "react"
import React from "react"
const SiteSetting = ()=>{

    
    const [backGroundColor, setBackGroundColor] = useState("blue");

    return (
        <div className="sitesetting-darkbackground">
            <div className='sitesetting-container'>
                <div className='sitesetting-x-box'>
                    <i className='iconCancel' role='img' aria-label='cancle'></i>
                </div>
            <header className='sitesetting-header'>
                <span>Site Settings</span>
            </header>
            <section className='sitesetting-setting'>
                <div className='sitesetting-fontsize'>
                    <span>Font Size</span>
                    <div className='sitesetting-slider'>
                        <input type='range' min="10" max="60" step='4' />
                    </div>
                </div>
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