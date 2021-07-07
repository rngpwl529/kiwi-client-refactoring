import axios from 'axios';
import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeSigninModal, openSignupModal } from '../../redux/modalstatus';

const SignIn = () => {

    let SERVER_URL = process.env.REACT_APP_SERVER_URL

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleOnClick = ()=>{
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
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const handleCloseButtonClick = () => {
        dispatch(closeSigninModal());
    }
    const handleSignupClick = () => {
        dispatch(closeSigninModal());
        dispatch(openSignupModal());
    }

    return (
        <div className="darkbackground">
            <div id='signin-container'>
                <div className='sign-img'></div>
                <div id='signin-form'>
                    <ion-icon name="close-outline" onClick={handleCloseButtonClick}></ion-icon>
                    <span className='title'>SignIn</span>
                    <div className='box'>
                        <div className='input'>
                            <ion-icon name='person-outline'></ion-icon>
                            <input
                                type='text'
                                placeholder='email'
                                onChange={event => {
                                    setEmail(event.target.value);
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
                        아직 회원이 아니신가요? <span onClick={handleSignupClick}>회원가입하기</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SignIn;