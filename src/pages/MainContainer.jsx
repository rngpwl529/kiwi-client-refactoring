// 리액트/리덕스
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
require("dotenv").config();
// 컨테이너 컴포넌트

// import ForceGraph from '../components/Main/forceGraph/forceGraph';
import HeaderContainer from '../containers/HeaderContainer'
import ModalContainer from '../containers/ModalContainer'
// 액션생성함수
import { closeNodesettingModal } from "../redux/modalstatus";
import {changeColor, changeFont} from '../redux/setting'
// import { signinMaintain } from "../redux/signin";
import { setNodeData, setEdgeData, handleLoadingOn } from "../redux/node";
import { signinMaintain } from '../redux/signin';
import dotenv from 'dotenv';
import ForceGraph from '../components/Main/forceGraph/forceGraph';
dotenv.config();

// import data from '../data/data.json'; // 임시더미데이터
const SERVER_API = process.env.REACT_APP_SERVER_API;

const MainContainer = () => {
  
  console.log("MainContainer");
  
  const dispatch = useDispatch();
  const { siteColor } = useSelector(state => state.setting);
  // const { siteFont } = useSelector(state => state.setting);
  const { isLoadingOn } = useSelector(state => state.node);
  // const { isSignin } = useSelector(state => state.sign);
  const state = useSelector(state => state);

  
  //const state = useSelector(state => state)
  
  
  

// TODO:social Login
//  if (!this.props.isSignIn) {
//   // 로그인이 아닐때
//   const url = new URL(window.location.href);
//   const authorizationCode = url.searchParams.get("code");
//   if (authorizationCode) {
//       this.getAccessToken(authorizationCode);
//   }
// }

// TODO:get AccessToken 
  //Access Token 받아오는 메서드
//  const getAccessToken = async (authCode) => {
//   console.log(authCode);
//   await axios
//       .post(
//           `${SERVER_API}/users/socialsignin`,
//           {
//               authorizationCode: authCode,
//           },
//           {
//               "Content-Type": "appliaction/json",
//               withCredentials: true,
//           }
//       )
//       .then((res) => {
//           console.log("문제없음");
//           console.log(res);
//           this.props.signIn();
//       })
//       .catch((err) => {
//           console.log("문제있음");
//           console.log(err);
//       });
// };
  
  //노드 클릭 옵션 창 닫기
  const closeNodesetting = (e) => {
    if (e.target.tagName !== 'text'
      && e.target.tagName !== 'circle'
      && e.target.id !== 'node-setting-container'
      && state.modal.nodesettingModal) {
      dispatch(closeNodesettingModal())
    }
  }
  //로그인 유지
  const handleLoginMaintain = () => {
    dispatch(signinMaintain());
  }
  //로딩 유지
  const setLoadingOn = () => {
    dispatch(handleLoadingOn());
  }
 
  //화면 가로크기 입력 함수 - mediaquery용
  //TODO: 창크기 값 REDUX에 만들어 놓기
  // useEffect(() => {
  //   handleWindowSize(window.innerWidth);
  //   window.addEventListener('resize', () => handleWindowSize(window.innerWidth));
  //   return () => {
  //     window.addEventListener('resize', () => handleWindowSize(window, innerWidth));
  //   }
  // }, []);
  
  //로그인 유지 함수
  useEffect(() => {
    // if (!this.props.inSignIn) {
      
    // }
    //localstorage에서 token토큰 뽑기
    let token = localStorage.getItem('token');
    
    //data loading
    setLoadingOn();
    setTimeout(() => {
      setLoadingOn();
    }, 1000);
    
    //edge 데이터 받아오기
    axios.get(`${SERVER_API}/nodemap/edge`,
      { withCredentials: true })
      .then(res => res.data)
      .then(data => {
          if (data.message === 'internal server error') {
            alert('서버가 정상적으로 동작하지 않습니다.')
          } else {
            dispatch(setEdgeData(data.edgeData));
          }
        })
        .catch(e => console.log(e,"실패함"));
    
    //node 데이터 받아오기
      axios.get(`${SERVER_API}/nodemap/node`,
      { withCredentials: true })
      .then(res => res.data)
      .then(data => {
          if (data.message === 'internal server error') {
              alert('서버가 정상적으로 동작하지 않습니다.')
          } else {
            let nodes = data.nodeData.map((el, idx) => {
              return {
                "id": idx,
                "nodeName": el.nodeName,
                "nodeColor": el.nodeColor
              };
            });
              dispatch(setNodeData(nodes));
          }
      })
      .catch(e => console.log(e));
  
    //토큰이 있을 때
    if (JSON.parse(token)) {
      handleLoginMaintain(); 
      let token = localStorage.getItem('token');

      axios.get(
        `${SERVER_API}/users/userinfo/${state.userinfo.id}`,
        { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
      )
        .then(res => res.data)
        .then(data => {
          //siteColor가 있을 때, siteColor 적용
          if (data.userData.siteColor) {
            dispatch(changeColor(data.userData.siteColor));
          }
          //siteFont가 있을 때, siteFont 적용
          if (data.userData.siteFont) {
            dispatch(changeFont(data.userData.siteFont))
          }
        })
        .catch(error => {
          console.log(error)
          if (error.status === 400) {
            //! 세션만료 모달, 로그인 해제
            localStorage.clear();
            // handleLogin();
            // window.location.reload();
            return alert('세션이 만료되었습니다. 다시 로그인 해주세요');
          }
        })
    }
    // document.querySelector('#main-container').style.backgroundColor = siteColor
    console.log('로그인유지 작동');
  }, [state.sign.isSignIn])


  return (
    <div id='main-container' style={{backgroundColor: siteColor}}>
      <HeaderContainer/>
      <ModalContainer/>
      <section className="Main" onClick={closeNodesetting} >
        {isLoadingOn ?
          <div>로딩중입니다.!!!</div>
          :  <ForceGraph/>}
      </section>
    </div>)
};

  export default MainContainer;
