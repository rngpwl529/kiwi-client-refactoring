import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeSigninModal } from '../../redux/modalstatus';
import { emailValid, passwordValid } from '../../utils/validCheck'
import SignUp from './SignUp'

const SignIn = () => {
    let SERVER_URL = process.env.REACT_APP_SERVER_URL

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signup, setSignup] = useState('')
    const dispatch = useDispatch();
    let emailInput = document.querySelector('.emailInput')
    let passwordInput = document.querySelector('.passwordInput')
    //이메일, 비밀번호 유효성 검사
    useEffect(()=>{
        if(emailValid(email)){
            emailInput.classList.remove('invalid')
        }
        else{
            emailInput.classList.add('invalid')
        }
        if(passwordValid(password)){
            passwordInput.classList.remove('invalid')
        }
        else{
            passwordInput.classList.add('invalid')
        }

    },[email,password])


    const handleSignIn = ()=>{
        axios
        .post(
            `${SERVER_URL}/users/signin`,
            {
                email,
                password
            }
        )
        .then(res=>{
            console.log(res)
            console.log('로그인 성공!')
            dispatch(closeSigninModal())
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const handleCloseButtonClick = () => {
        dispatch(closeSigninModal());
    }

    const handleSignup=()=>{
        setSignup(true)
    }


    return (
        <div className="darkbackground">
            <div id='signin-container'>
                <div className='sign-img'></div>
                {!signup ?
                    <div id='signin-form'>
                        <ion-icon name="close-outline" onClick={handleCloseButtonClick}></ion-icon>
                        <span className='title'>SignIn</span>
                        <div className='box'>
                            <div className='input emailInput'>
                                <ion-icon name='person-outline'></ion-icon>
                                <input
                                    type='text'
                                    placeholder='email'
                                    className='email'
                                    onChange={event => {
                                        setEmail(event.target.value);
                                    }}
                                ></input>
                                <ion-icon name='checkmark-circle-outline'></ion-icon>
                            </div>
                            <div className='input passwordInput'>
                                <ion-icon name='lock-closed-outline'></ion-icon>
                                <input
                                    type='password'
                                    placeholder='password'
                                    className='password'
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
                                onClick={handleSignIn}
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
                            아직 회원이 아니신가요? <span onClick={handleSignup}>회원가입하기</span>
                        </span>
                    </div>
                    :<SignUp setSignup={setSignup} handleCloseButtonClick={handleCloseButtonClick}/>
                }
            </div>
        </div>
    );
};

export default SignIn;