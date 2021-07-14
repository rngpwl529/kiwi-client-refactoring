import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeSigninModal } from '../../redux/modalstatus';
import {updateUserInfo} from '../../redux/userinfo'
import {signIn} from '../../redux/signin'
import { emailValid, passwordValid } from '../../utils/validCheck'
import SignUp from './SignUp'
import dotenv from 'dotenv';
dotenv.config();

const SignIn = () => {
    const SERVER_API = process.env.REACT_APP_SERVER_API;
    const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
    const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signup, setSignup] = useState('')
    const [isEmailValid, setIsEmailValid] = useState('')
    const [isPasswordValid, setIsPasswordValid] = useState('')
    const [emailIcon, setEmailIcon] = useState('')
    const [passwordIcon, setPasswordIcon] = useState('')
    const dispatch = useDispatch();

    //이메일, 비밀번호 유효성 검사
    useEffect(() => {
        setIsEmailValid('')
        setIsPasswordValid('')
        if (emailValid(email)) {
            setIsEmailValid('valid')
            setEmailIcon('checkmark-circle-outline')
        }
        else if (emailValid(email) === false && email.length > 0) {
            setIsEmailValid('invalid')
            setEmailIcon('close-circle-outline')
        }
        if (passwordValid(password)) {
            setIsPasswordValid('valid')
            setPasswordIcon('checkmark-circle-outline')
        }
        else if (passwordValid(password) === false && password.length > 0) {
            setIsPasswordValid('invalid')
            setPasswordIcon('close-circle-outline')
        }
    }, [email, password])


    //로그인 요청
    const handleSignIn = () => {
        if (!(isPasswordValid === 'valid' && isEmailValid === 'valid')) {
            alert('올바르지 않은 형식이 포함되어 있습니다.');
        }
        
        else {
            axios
                .post(
                    `${SERVER_API}/users/signin`,
                    {
                        email,
                        password
                    },
                    {
                            withCredentials: true
                    }
                )
                .then(res => res.data)
                .then(data => {
                    if (data.message === 'passwords don\'t match') {
                        console.log("비밀번호가 일치하지 않음");
                    } else if (data.message === 'not authorized') {
                        console.log("권한이 없음");
                    } else if (data.message === 'login successfully') {
                        console.log(data)
                        console.log('로그인 성공!')
                        dispatch(closeSigninModal())
                        dispatch(updateUserInfo({
                            id: data.id,
                            email: email,
                            username: '',       //TODO:SERVER에서 보내줘야하는 데이터 양식
                        }))
                        dispatch(signIn());
                        
                        localStorage.setItem('token', JSON.stringify(data.accessToken));
                        window.location.reload();
                    }
                })
                .catch(err => {
                    console.log(err)
                });
        }
    }
        const kakaoSignin = () => {
            window.location.assign(
                `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`
            );
            //mainpage redirect
        }

    
        const handleCloseButtonClick = () => {
            dispatch(closeSigninModal());
        }

        const handleSignup = () => {
            setSignup(true)
        }


        return (
            <div className="darkbackground">
                <div id='signin-container'>
                    <div className='sign-img'>
                        <object 
                        type="image/svg+xml"
                        data='/images/whitelogo.svg' className='signLogo'></object>
                    </div>
                    {!signup ?
                        <div id='signin-form'>
                            <ion-icon name="close-outline" onClick={handleCloseButtonClick}></ion-icon>
                            <span className='title'>SignIn</span>
                            <div className='box'>
                                <div className={`input ${isEmailValid}`}>
                                    <ion-icon name='person-outline'></ion-icon>
                                    <input
                                        type='email'
                                        placeholder='email'
                                        className='email'
                                        onChange={event => {
                                            setEmail(event.target.value);
                                        }}
                                    ></input>
                                    {isEmailValid === 'invalid'
                                        ? <>
                                            <ion-icon name={emailIcon}></ion-icon>
                                            <p>@를 포함해 입력해주세요</p>
                                        </> : null}
                                </div>
                                <div className={`input ${isPasswordValid}`}>
                                    <ion-icon name='lock-closed-outline'></ion-icon>
                                    <input
                                        type='password'
                                        placeholder='password'
                                        className='password'
                                        onChange={event => {
                                            setPassword(event.target.value);
                                        }}
                                    ></input>
                                    {isPasswordValid === 'invalid'
                                        ? <>
                                            <ion-icon name={passwordIcon}></ion-icon>
                                            <p>특수문자, 숫자, 영어를 포함해 입력해주세요</p>
                                        </> : null}
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
                                <div className='btn kakao' onClick={kakaoSignin}>카카오 로그인</div>
                            </div>
                            <span className='link'>
                                아직 회원이 아니신가요? <span onClick={handleSignup}>회원가입하기</span>
                            </span>
                        </div>
                        : <SignUp setSignup={setSignup} handleCloseButtonClick={handleCloseButtonClick} />
                    }
                </div>
            </div>
        );
    }


export default SignIn;