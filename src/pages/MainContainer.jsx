import React, { useEffect, useCallback } from 'react';
// import MainSearchBar from "../components/Main/MainSearchBar"
// import MapController from "../components/Main/MapController"
import NodeOption from "../components/Main/NodeOption"
// import NodeSetting from "../components/Main/NodeSetting"
import { useSelector, useDispatch } from 'react-redux';
import SignIn from "../components/Main/SignIn"
import SignUp from "../components/Main/SignUp"
import SiteSetting from "../components/Main/SiteSetting"
import UserSetting from "../components/Main/UserSetting"
import NodeMap from '../components/Main/NodeMap'
import Header from '../containers/Header'

import action from "../redux/modalstatus";
import ForceGraph from '../components/Main/forceGraph/forceGraph';
import data from '../data/data.json';
import { signinMaintain } from "../redux/signin";
import axios from 'axios';
// import googleTrend from '../utils/googleTrend';
// import validCheck from "../utils/validCheck";

// import action from "../redux/modalstatus";

const MainContainer = () => {
  console.log(`${SignIn},${SignUp},${SiteSetting},${UserSetting}`);
  const nodeHoverTooltip = useCallback((node, x, y) => {
    return `<div> ${x}, ${y}
  <b> id : ${node.id}</b>
  <b> name : ${node.name}</b>
  <b> gender : ${node.gender}</b>
</div>`;
  }, []);
  
  console.log(action);
  const modal = useSelector(state => state.modal);
  // const { nodeData } = useSelector(state => state.node);
  // const { edgeData } = useSelector(state => state.edge);
  // const { isLoadingOn } = useSelector(state => state.node);


  
  const { siteColor, siteFont } = useSelector(state => state.setting);
  
  const handleLoginMaintain = () => {
    dispatch(signinMaintain());
  }
  // const fontSize = useSelector(state => state.setting);
  // const siteColor = useSelector(state => state.setting);

  const dispatch = useDispatch();
  //로그인 유지 함수
  useEffect(() => {
    let token = localStorage.getItem('token');
    //handleLoadingOn();
    // setTimeout(() => {
    //   handleLoadingOn();
    // }, 3000)
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
          console.log("cors 에러 뜸");
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
      <NodeMap dispatch={dispatch} />
      <Header />
      {modal.settingModal ? <SiteSetting /> : false}
      {modal.userInfoModal ? <UserSetting /> : false}
      {modal.signupModal ? <SignUp /> : false}
      {modal.signinModal ? <SignIn /> : false}
      {modal.nodeoptionModal ? <NodeOption /> : false}
      <section className="Main">
        <ForceGraph
          nodesData={data.nodes}
          linksData={data.links}
          nodeHoverTooltip={nodeHoverTooltip}
        />
      </section>
    </div>)
};

  export default MainContainer;
