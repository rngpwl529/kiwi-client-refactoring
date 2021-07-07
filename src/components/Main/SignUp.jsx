import axios from 'axios';
import React,{ useState } from 'react';

const SignUp = () => {
    let SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [password2, setPassword2] = useState("");

    const handleOnClick= ()=>{
        axios
        .post(
            `${SERVER_URL}/users/signup`,
            {
                email,
                username,
                password,
            }
        )
    }

    return (
        <div id='signin-container'>
            <div className='sign-img'></div>
            <div id='signin-form'>
                <span className='title'>SignUp</span>
                <div className='box'>
                    <div className='input'>
                        <ion-icon name='person-outline'></ion-icon>
                        <input type='text'
                            placeholder='email'
                            onChange={event => {
                                setEmail(event.target.value);
                            }}
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
                                setPassword(event.target.value);
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
                        로그인
                    </div>
                    <div className='splitter'>
                        <div className='line'></div>
                        <div>OR</div>
                        <div className='line'></div>
                    </div>
                    <div className='btn kakao'>카카오 로그인</div>
                </div>
                <span className='link'>
                    이미 회원이신가요? <a href='/'>로그인하기</a>
                </span>
            </div>
        </div>
    );
};

export default SignUp;