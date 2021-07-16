import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import dotenv from 'dotenv';
import { signIn, socialSignin } from '../redux/signin';
import { updateUserInfo } from '../redux/userinfo';

dotenv.config();
const SERVER_API = process.env.REACT_APP_SERVER_API;


const KakaoContainer = () => {
  // TODO:social Login
  console.log("하이");
  const dispatch = useDispatch();

  const kakaoCheck = (token, social, url) => {
    console.log("authorizationCode 획득");
      const authorizationCode = url.searchParams.get("code");
    if (authorizationCode) {
        console.log("authorizationCode 획득확인");
        getAccessToken(authorizationCode);
      }
      return;
  }
  const getAccessToken = (authCode) => {
    console.log("getAccessToken 실행");
    axios
      .post(
        `${SERVER_API}/users/socialsignin`,
        {
          "authorizationCode": authCode,
        },
        {
          "Content-Type": "appliaction/json",
          withCredentials: true,
        }
      )
      .then((res) => {
        //소셜사인인 과정
        console.log(res.data, '<<<<< 소셜로그인');
        localStorage.setItem('kakaoToken', JSON.stringify(res.data.kakaoToken));
        localStorage.setItem('token', JSON.stringify(res.data.accessToken));
        dispatch(signIn(res.data.accessToken));
        dispatch(socialSignin());
        return res.data;
      })
      .then((data) => {
        dispatch(updateUserInfo({
          id: data.id,
        }));
        window.location.assign('http://localhost:3000/main');
      })
      .catch((err) => {
        console.log("문제있음");
        console.log(err);
      });
  }
    useEffect(() => {
      let url = new URL(window.location.href);
      //localstorage에서 token토큰 뽑기
      let token = localStorage.getItem('token');
      let social = localStorage.getItem('social');
      //kakao 로그인 겸 회원가입
      kakaoCheck(token, social, url);
    },[]);
  
  return (
    <>
      <div id='kakao-container'>
      <h1>하이</h1>
      </div>
    </>
  );
}

export default KakaoContainer;