import { useState } from "react";

const SignUp = ()=>{

    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    return (
        <div>
            <img alt="ima"></img>
            <div>
                <span>SignUp</span>
                <div>
                    <div>
                        <div>
                            <span>이메일</span>
                            <input type="text" onChange={(event)=>{setEmail(event.target.value)}}></input>
                        </div>
                        <div>
                            <span>닉네임</span>
                            <input type="text" onChange={(event)=>{setNickname(event.target.value)}}></input>
                        </div>
                        <div>
                            <span>비밀번호</span>
                            <input type="password" onChange={(event)=>{setPassword(event.target.value)}}></input>
                        </div>
                        <div>
                            <span>비밀번호 확인</span>
                            <input type="password" onChange={(event)=>{setPassword2(event.target.value)}}></input>
                        </div>
                    </div>
                    <div>
                        <span onClick={()=>{alert(`email: ${email}, password: ${password}`)}}>Signin</span>
                        <span>카카오 로그인</span>
                    </div>
                </div>
                <span>이미 회원이신가요? <a href="/">로그인하기</a></span>
            </div>
        </div>
    )
}

export default SignUp;