import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import { emailValid, passwordValid} from '../../utils/validCheck'

const SignUp = ({setSignup, handleCloseButtonClick}) => {

    let SERVER_URL = process.env.REACT_APP_SERVER_URL

    const [email, setEmail] = useState("");
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [isEmailValid, setIsEmailValid] = useState('')
    const [isPasswordValid, setIsPasswordValid] = useState('')
    const [isUserNameValid, setIsUserNameValid] = useState('')
    const [isPasswordCheckValid, setIsPasswordCheckValid] = useState('')
    const [emailIcon, setEmailIcon] = useState('')
    const [passwordIcon, setPasswordIcon] = useState('')
    const [userNameIcon, setUserNameIcon] = useState('')
    const [passwordCheckIcon, setPasswordCheckIcon] = useState('')

    //유효성 검사 후 ui변경
    useEffect(()=>{
        //이메일 유효성검사
        if(emailValid(email)){
            setIsEmailValid('valid')
            setEmailIcon('checkmark-circle-outline')
        }
        else if(emailValid(email)===false&&email.length>0){
            setIsEmailValid('invalid')
            setEmailIcon('close-circle-outline')
        }
        //비밀번호 유효성검사 
        if(passwordValid(password)){
            setIsPasswordValid('valid')
            setPasswordIcon('checkmark-circle-outline')
        }
        else if(passwordValid(password)===false&&password.length>0){
            setIsPasswordValid('invalid')
            setPasswordIcon('close-circle-outline')
        }
        //유저네임 유효성 검사
        if(userName.length >= 2){
            setIsUserNameValid('valid')
            setUserNameIcon('checkmark-circle-outline')
        }
        else if(userName.length < 2 && userName !== ''){
            setIsUserNameValid('invalid')
            setUserNameIcon('close-circle-outline')
        }

        //비밀번호 확인
        if(password === passwordCheck && passwordCheck.length > 0){
            setIsPasswordCheckValid('valid')
            setPasswordCheckIcon('checkmark-circle-outline')
        }
        else if(password !== passwordCheck && passwordCheck.length > 0){
            setIsPasswordCheckValid('invalid')
            setPasswordCheckIcon('close-circle-outline')
        }

    },[email,password,userName,passwordCheck])


    const handleOnClick= ()=>{
        if([isEmailValid,isPasswordCheckValid,isPasswordValid,isUserNameValid].includes('invalid')){
            alert('올바르지 않은 형식이 포함되어 있습니다.')
        }
        else{
            axios
            .post(
                `${SERVER_URL}/users/signup`,
                {
                    email,
                    userName,
                    password,
                },
                {headers:{
                    withCredentials : true
                }}
            )
            .then((res)=>{
                    console.log(res)
                    console.log('회원가입 성공!!')
                    setSignup(false)
                }
            )
            .catch((err)=>{
                console.log(err)
                    // if(err.response.status === 409){
                    //     alert('이미 존재하는 이메일입니다')
                    // }
                }
            )
        }
    }

    const handleSignIn = ()=>{
        setSignup(false)
    }

    return (
        <div id='signin-form'>
            <ion-icon name="close-outline" onClick={handleCloseButtonClick}></ion-icon>
            <span className='title'>SignUp</span>
            <div className='box'>
                <div className={`input ${isEmailValid}`}>
                    <ion-icon name='person-outline'></ion-icon>
                    <input type='text'
                        placeholder='email'
                        onChange={event => {
                            setEmail(event.target.value);
                        }
                        
                    }
                    ></input>
                    {isEmailValid ==='invalid'
                    ?<>
                        <ion-icon name={emailIcon}></ion-icon>
                        <p>@를 포함해 입력해주세요</p>
                    </> :null}
                </div>
                <div className={`input ${isUserNameValid}`}>
                    <ion-icon name='person-outline'></ion-icon>
                    <input
                        type='text'
                        placeholder='username'
                        onChange={event => {
                            setUsername(event.target.value);
                        }}
                    ></input>
                    {isUserNameValid ==='invalid'
                    ?<>
                        <ion-icon name={userNameIcon}></ion-icon>
                        <p>영어 또는 한글을 두자리 이상 입력해주세요</p>
                    </> :null}
                </div>
                <div className={`input ${isPasswordValid}`}>
                    <ion-icon name='lock-closed-outline'></ion-icon>
                    <input
                        type='password'
                        placeholder='password'
                        onChange={event => {
                            setPassword(event.target.value);
                        }}
                    ></input>
                    {isPasswordValid ==='invalid'
                    ?<>
                        <ion-icon name={passwordIcon}></ion-icon>   
                        <p>특수문자, 숫자, 영어 포함 8~25자리를 입력해주세요</p>    
                    </> :null}
                </div>
                <div className={`input ${isPasswordCheckValid}`}>
                    <ion-icon name='lock-closed-outline'></ion-icon>
                    <input
                        type='password'
                        placeholder='password check'
                        onChange={event => {
                            setPasswordCheck(event.target.value);
                        }}
                    ></input>
                    {isPasswordCheckValid ==='invalid'
                    ?<>
                        <ion-icon name={passwordCheckIcon}></ion-icon>
                        <p>비밀번호와 일치하지 않습니다</p>
                    </> :null}
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