import axios from 'axios';
import React,{ useState } from 'react';

const SignUp = ({setSignup, handleCloseButtonClick}) => {

    let SERVER_URL = process.env.REACT_APP_SERVER_URL

    const [email, setEmail] = useState("");
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    console.log(passwordCheck)


    const handleOnClick= ()=>{
        axios
        .post(
            `${SERVER_URL}/users/signup`,
            {
                email,
                userName,
                password,
            }
        )
        .then((res)=>{
                console.log(res)
                console.log('회원가입 성공!!')
                setSignup(false)
            }
        )
        .catch((err)=>{
                console.log(err.response)
            }
        )
    }

    const handleSignIn = ()=>{
        setSignup(false)
    }

    return (
        <div id='signin-form'>
            <ion-icon name="close-outline" onClick={handleCloseButtonClick}></ion-icon>
            <span className='title'>SignUp</span>
            <div className='box'>
                <div className='input'>
                    <ion-icon name='person-outline'></ion-icon>
                    <input type='text'
                        placeholder='email'
                        onChange={event => {
                            setEmail(event.target.value);
                        }
                        
                    }
                    ></input>
                    <ion-icon name='checkmark-circle-outline'></ion-icon>
                </div>
                <div className='input'>
                    <ion-icon name='person-outline'></ion-icon>
                    <input
                        type='text'
                        placeholder='username'
                        onChange={event => {
                            setUsername(event.target.value);
                        }}
                    ></input>
                    <ion-icon name='checkmark-circle-outline'></ion-icon>
                </div>
                <div className='input'>
                    <ion-icon name='lock-closed-outline'></ion-icon>
                    <input
                        type='password'
                        placeholder='password'
                        onChange={event => {
                            setPassword(event.target.value);
                        }}
                    ></input>
                    <ion-icon name='close-circle-outline'></ion-icon>
                </div>
                <div className='input'>
                    <ion-icon name='lock-closed-outline'></ion-icon>
                    <input
                        type='password'
                        placeholder='password check'
                        onChange={event => {
                            setPasswordCheck(event.target.value);
                        }}
                    ></input>
                    <ion-icon name='close-circle-outline'></ion-icon>
                </div>
            </div>
            <div className='submit'>
                <div
                    className='btn sign'
                    onClick={handleOnClick}
                >
                    회원가입
                </div>
                <div className='splitter'>
                    <div className='line'></div>
                    <div>OR</div>
                    <div className='line'></div>
                </div>
                <div className='btn kakao'>카카오 회원가입</div>
            </div>
            <span className='link'>
                이미 회원이신가요? <span onClick={handleSignIn}>로그인하기</span>
            </span>
        </div>
    );
};

export default SignUp;