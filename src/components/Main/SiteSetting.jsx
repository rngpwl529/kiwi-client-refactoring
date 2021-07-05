import { useState } from "react"
import React from "react"
const SiteSetting = ()=>{

    const [fontSize, setFontSize] = useState(14);
    const [backGroundColor, setBackGroundColor] = useState("blue");

    return (
        <div>
            <div>
                <span>환경설정</span>
                <img alt="X" onClick={()=>{console.log(fontSize,backGroundColor)}}></img>
            </div>
            <div>
                <div>
                    <span>글자크기</span>
                    <img alt="14px" onClick={()=>{setFontSize(14)}}></img>
                    <img alt="18px" onClick={()=>{setFontSize(18)}}></img>
                    <img alt="24px" onClick={()=>{setFontSize(24)}}></img>
                </div>
                <div>
                    <span>배경색</span>
                    <img alt="black" onClick={()=>{setBackGroundColor("black")}}></img>
                    <img alt="red" onClick={()=>{setBackGroundColor("red")}}></img>
                    <img alt="blue" onClick={()=>{setBackGroundColor("blue")}}></img>
                    <img alt="green" onClick={()=>{setBackGroundColor("green")}}></img>
                </div>
            </div>
        </div>
    )
}
  
export default SiteSetting