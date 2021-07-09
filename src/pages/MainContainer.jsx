import React, { useEffect, useCallback } from 'react';
// import MainSearchBar from "../components/Main/MainSearchBar"
// import MapController from "../components/Main/MapController"

// import NodeSetting from "../components/Main/NodeSetting"
import { useSelector, useDispatch } from 'react-redux';

import NodeMap from '../components/Main/NodeMap'
import HeaderContainer from '../containers/HeaderContainer'
import ModalContainer from '../containers/ModalContainer';
import action, { closeNodesettingModal } from "../redux/modalstatus";
import ForceGraph from '../components/Main/forceGraph/forceGraph';
import data from '../data/data.json';
// import { signinMaintain } from "../redux/signin";
import { setNodeData, /*addEdgeData, updateNodeData, deleteNodeData,*/ handleLoadingOn } from "../redux/node";
// import { closeNodesettingModal } from '../redux/modalstatus'
import axios from 'axios';
// import googleTrend from '../utils/googleTrend';
// import validCheck from "../utils/validCheck";

// import action from "../redux/modalstatus";

const MainContainer = () => {
  console.log("MainContainer");
  const nodeHoverTooltip = useCallback((node, x, y) => {
    return `<div> ${x}, ${y}
  <b> id : ${node.id}</b>
  <b> name : ${node.name}</b>
  <b> gender : ${node.gender}</b>
</div>`;
  }, []);
  const dispatch = useDispatch();
  console.log(action);
  // const { nodeData } = useSelector(state => state.node);
  // const { edgeData } = useSelector(state => state.edge);
  // const { isLoadingOn } = useSelector(state => state.node);

 
  
  const { siteColor, siteFont } = useSelector(state => state.setting);
  
  const closeNodesetting = (e) => {
    if(e.target.tagName!=='text' && e.target.tagName !=='circle'){
      dispatch(closeNodesettingModal())
    }
  }
  // const handleLoginMaintain = () => {
  //   dispatch(signinMaintain());
  // }
  // const fontSize = useSelector(state => state.setting);
  // const siteColor = useSelector(state => state.setting);

      //엣지데이터 요청
    // const loadEdgedata = async () => {
    //     await axios.get('https://kiwimap.shop/nodemap/edge',
    //     { headers: { withCredentials: true } })
    //     .then(res => res.data)
    //     .then(data => {
    //         console.log(data);
    //         if (data.message === 'internal server error') {
    //             alert('서버가 정상적으로 동작하지 않습니다.')
    //         } else {
    //             dispatch(setEdgeData(data.edgeData));
    //         }
    //     })
    //     .catch(e => console.log(e));
    // }
    //노드데이터 요청
    const loadNodedata = async () => {
      await axios.get('https://kiwimap.shop/nodemap/node',
      { withCredentials: true })
      .then(res => res.data)
      .then(data => {
          console.log(data);
          if (data.message === 'internal server error') {
              alert('서버가 정상적으로 동작하지 않습니다.')
          } else {
              dispatch(setNodeData(data.nodeData));
          }
      })
      .catch(e => console.log(e));
  }
  //초기 데이터 세팅
  const loadNodemapData = async () => {
      dispatch(handleLoadingOn());
      loadNodedata();
      // loadEdgedata();
  }

  //로그인 유지 함수
  useEffect(() => {
    loadNodemapData();
    let token = localStorage.getItem('token');
    //handleLoadingOn();
    // setTimeout(() => {
    //   handleLoadingOn();
    // }, 3000)
    if (JSON.parse(token)) {
      // handleLoginMaintain(); // 토큰 존재시 로그인상태 유지
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
            // window.location.reload();
            return alert('세션이 만료되었습니다. 다시 로그인 해주세요');
          }
        })
    }
    console.log('로그인유지 작동');
  }, [])

  return (
    <div id='main-container'>
      <NodeMap dispatch={dispatch} />
      <HeaderContainer/>
      <ModalContainer/>
      <section className="Main" onClick={closeNodesetting} >
        <ForceGraph
          nodesData={data.nodes}
          linksData={data.links}
          nodeHoverTooltip={nodeHoverTooltip}
        />
      </section>
    </div>)
};

  export default MainContainer;
