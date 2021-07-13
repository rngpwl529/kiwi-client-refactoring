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
import { signinMaintain } from "../redux/signin";
import { setNodeData, setEdgeData, handleLoadingOn } from "../redux/node";
import dotenv from 'dotenv';
// import ForceGraph from '../components/Main/forceGraph/forceGraph';
dotenv.config();

// import data from '../data/data.json'; // 임시더미데이터
const SERVER_API = process.env.REACT_APP_SERVER_API;

const MainContainer = () => {
  
  console.log("MainContainer");
  const dispatch = useDispatch();
  const { siteColor, siteFont } = useSelector(state => state.setting);
  
//   const nodeHoverTooltip = useCallback((node, x, y) => {
//     return `<div> ${x}, ${y}
//   <b> id : ${node.id}</b>
//   <b> name : ${node.name}</b>
//   <b> gender : ${node.gender}</b>
// </div>`;
//   }, []);
  
// TODO: NODEMAP DATA

  const { isLoadingOn } = useSelector(state => state.node);
  
  // const { isLoadingOn } = useSelector(state => state.node);

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
  
  
  //노드 클릭 창 닫기
  const closeNodesetting = (e) => {
    if(e.target.tagName!=='text' && e.target.tagName !=='circle' && e.target.id !== 'node-setting-container'){
      dispatch(closeNodesettingModal())
    }
  }
  //로그인 유지
  const handleLoginMaintain = () => {
    dispatch(signinMaintain());
  }
  const setLoadingOn = () => {
    dispatch(handleLoadingOn());
  }
  // const fontSize = useSelector(state => state.setting);
  // const siteColor = useSelector(state => state.setting);

 
  
  //초기 데이터 세팅
  
  //화면 가로크기 입력 함수
  // useEffect(() => {
  //   handleWindowSize(window.innerWidth);
  //   window.addEventListener('resize', () => handleWindowSize(window.innerWidth));
  //   return () => {
  //     window.addEventListener('resize', () => handleWindowSize(window, innerWidth));
  //   }
  // }, []);
  
  //로그인 유지 함수
  useEffect(() => {
    let token = localStorage.getItem('token');
    console.log(isLoadingOn);
    setLoadingOn();
    console.log("로딩시작");
    setTimeout(() => {
      setLoadingOn();
      console.log("로딩끝");
    }, 5000);
    
    axios.get(`${SERVER_API}/nodemap/edge`,
      { withCredentials: true })
      .then(res => res.data)
      .then(data => {
          console.log(data.edgeData, "서버에서 받아온 데이터");
          if (data.message === 'internal server error') {
            alert('서버가 정상적으로 동작하지 않습니다.')
          } else {
            dispatch(setEdgeData(data.edgeData));
          }
        })
        .catch(e => console.log(e,"실패함"));
      
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
            console.log(nodes, "서버에서 받아온 데이터");
              dispatch(setNodeData(nodes));
          }
      })
      .catch(e => console.log(e));
  
    if (JSON.parse(token)) {
      handleLoginMaintain(); // 토큰 존재시 로그인상태 유지
      // 메인페이지 열릴 때 마다 유저정보에 담긴 각각 화면 구성하는 상태 가져와서 갱신
      let token = localStorage.getItem('token');
      axios.get(
        `https://kiwimap.shop/users/userinfo`,
        { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
      )
        .then(res => res.data)
        .then(data => {
          console.log(data);
          //siteColor가 있을 때, siteColor 적용
          if (data.userInfo.sitecolor !== siteColor) {
            // changeColor(data.userInfo.sitecolor);
          }
          //fontSize가 있을 때, fontSize 적용
          if (data.userInfo.siteFont !== siteFont) {
            // changeFont(data.userInfo.fontSize)
          }
        })
        .catch(error => {
          if (error.response.status === 400) {
            //! 세션만료 모달, 로그인 해제
            localStorage.clear();
            // handleLogin();
            window.location.reload();
            return alert('세션이 만료되었습니다. 다시 로그인 해주세요');
          }
        })
    }
    console.log('로그인유지 작동');
  }, [])

  return (
    <div id='main-container'>
      <HeaderContainer/>
      <ModalContainer/>
      <section className="Main" onClick={closeNodesetting} >
        {isLoadingOn ?
          <div>로딩중입니다.!!!</div>
          :  false}
      </section>
    </div>)
};

  export default MainContainer;
