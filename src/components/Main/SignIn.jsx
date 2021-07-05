import { useState } from 'react';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div id='signin-container'>
            <div className='sign-img'></div>
            <div id='signin-form'>
                <span className='title'>SignIn</span>
                <div className='box'>
                    <input
                        type='text'
                        onChange={event => {
                            setEmail(event.target.value);
                        }}
                    ></input>
                    <input
                        type='password'
                        onChange={event => {
                            setPassword(event.target.value);
                        }}
                    ></input>
                </div>
                <div className='submit'>
                    <div
                        onClick={() => {
                            alert(`email: ${email}, password: ${password}`);
                        }}
                    >
                        Signin
                    </div>
                    <div className='splitter'></div>
                    <div>카카오 로그인</div>
                </div>
                <span>
                    아직 회원이 아니신가요? <a href='/'>회원가입하기</a>
                </span>
            </div>
        </div>
    );
};

export default SignIn