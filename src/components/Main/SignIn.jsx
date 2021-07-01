import { useState } from "react";

const SignIn = ()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <img alt="ima"></img>
            <div>
                <span>SignIn</span>
                <div>
                    <div>
                        <input type="text" onChange={(event)=>{setEmail(event.target.value)}}></input>
                        <input type="password" onChange={(event)=>{setPassword(event.target.value)}}></input>
                    </div>
                    <div>
                        <span onClick={()=>{alert(`email: ${email}, password: ${password}`)}}>Signin</span>
                        <span>카카오 로그인</span>
                    </div>
                </div>
                <span>아직 회원이 아니신가요? <a href="/">회원가입하기</a></span>
            </div>
        </div>
    )
}

export default SignIn;