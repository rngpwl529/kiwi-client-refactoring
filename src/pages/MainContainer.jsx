// 리액트/리덕스
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
// 컨테이너 컴포넌트
import NodeMap from '../components/Main/NodeMap';
import ForceGraph from '../components/Main/forceGraph/forceGraph';
import HeaderContainer from '../containers/HeaderContainer'
import ModalContainer from '../containers/ModalContainer'
// 액션생성함수
import { closeNodesettingModal } from "../redux/modalstatus";
// import { signinMaintain } from "../redux/signin";
import { setNodeData, handleLoadingOn } from "../redux/node";
import {changeColor, changeFont} from '../redux/setting'

import data from '../data/data.json'; // 임시더미데이터
const SERVER_API = process.env.REACT_APP_SERVER_URL;

const MainContainer = () => {
  console.log("MainContainer");
  const dispatch = useDispatch();
  const { siteColor } = useSelector(state => state.setting);
  const state = useSelector(state=>state)
  console.log(state)
//   const nodeHoverTooltip = useCallback((node, x, y) => {
//     return `<div> ${x}, ${y}
//   <b> id : ${node.id}</b>
//   <b> name : ${node.name}</b>
//   <b> gender : ${node.gender}</b>
// </div>`;
//   }, []);
// TODO: NODEMAP DATA
  // const { nodeData } = useSelector(state => state.node);
  // const { edgeData } = useSelector(state => state.edge);
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
  
  
  
  const closeNodesetting = (e) => {
    if(e.target.tagName!=='text' && e.target.tagName !=='circle' && e.target.id !== 'node-setting-container'){
      dispatch(closeNodesettingModal())
    }
  }
  // const handleLoginMaintain = () => {
  //   dispatch(signinMaintain());
  // }
  // const siteFont = useSelector(state => state.setting);
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
      await axios.get(`${SERVER_API}/nodemap/node`,
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
      console.log(`유저 아이디${state.userinfo.id}`)
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
      <NodeMap dispatch={dispatch} />
      <HeaderContainer/>
      <ModalContainer/>
      <section className="Main" onClick={closeNodesetting} >
        <ForceGraph
          nodesData={data.nodes}
          linksData={data.links}
          // nodeHoverTooltip={nodeHoverTooltip}
        />
      </section>
    </div>)
};

  export default MainContainer;
