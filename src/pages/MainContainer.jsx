// 리액트/리덕스
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
require("dotenv").config();
// 컨테이너 컴포넌트
import HeaderContainer from '../containers/HeaderContainer'
import ModalContainer from '../containers/ModalContainer'
// 액션생성함수
import { closeNodesettingModal } from "../redux/modalstatus";
import { changeColor, changeFont, setWindowSize} from '../redux/setting'
import { setNodeData, handleLoadingOn } from "../redux/nodemap";
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
  //윈도우 창 너비 SET
  const handleWindowSize = (windowSize) => {
    dispatch(setWindowSize(windowSize));
  }
 
  //화면 가로 크기 - mediaquery용 useEffect
  useEffect(() => {
    handleWindowSize(window.innerWidth);
    window.addEventListener('resize', () => handleWindowSize(window.innerWidth));
    return () => {
      window.addEventListener('resize', () => handleWindowSize(window, innerWidth));
    }
  }, []);
  
  //로그인 유지 함수
  useEffect(() => {
    
    //localstorage에서 token토큰 뽑기
    let token = localStorage.getItem('token');
    
    //data loading
   setLoadingOn()
    setTimeout(() => {
      setLoadingOn();
    }, 1000);
    
    
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
                "id": el.nodeName,
                "number": idx,
                "nodeName": el.nodeName,
                "nodeColor": el.nodeColor
              };
            });
            let edges = data.edgeData;
              dispatch(setNodeData(nodes, edges));
          }
      })
      .catch(e => console.log(e));
  
    //토큰이 있을 때
    if (JSON.parse(token)) {
      handleLoginMaintain(); 
      let token = localStorage.getItem('token');

      axios.get(
        `${SERVER_API}/users/userinfo/`,
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
            window.location.reload();
            console.log("에러");
            return alert('세션이 만료되었습니다. 다시 로그인 해주세요');
          }
        })
    }
    console.log('로그인유지 작동');
  }, [])


  return (
    <div id='main-container' style={{backgroundColor: siteColor}}>
      <HeaderContainer/>
      <ModalContainer/>
      <section className="Main" onClick={closeNodesetting} >
        {isLoadingOn ?
          <div className='loading'>
            <svg className="loading__circle">
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            ...Loading KiWiMap...
          </div>
          :   <ForceGraph/>}
      </section>
    </div>)
};
//에러수정
  export default MainContainer;