import { useState } from "react"

const UserSetting = ()=>{

    const [fontSize, setFontSize] = useState(14);
    const [backGroundColor, setBackGroundColor] = useState("blue");

    return (
        <div>
            <div>
                <span>내정보</span>
                <img alt="X" onClick={()=>{}}></img>
            </div>
            <div>
                <div>
                    <span>이메일</span>
                    <span>{}</span>
                </div>
                <div>
                    <span>닉네임</span>
                    <span>{}</span>
                </div>
            </div>
            <div>
                <div>로그아웃</div>
                <div>회원정보수정</div>
                <div>탈퇴</div>
            </div>
        </div>
    )
}
  
export default UserSetting