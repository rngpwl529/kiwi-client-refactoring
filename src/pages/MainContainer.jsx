import { React, useCallback } from 'react';
import MainSearchBar from "../components/Main/MainSearchBar"
import MapController from "../components/Main/MapController"
import NodeOption from "../components/Main/NodeOption"
import NodeSetting from "../components/Main/NodeSetting"
import { useSelector, useDispatch } from 'react-redux';

// import MainSearchBar from "../components/Main/MainSearchBar"
// import MapController from "../components/Main/MapController"
// import NodeOption from "../components/Main/NodeOption"
// import NodeSetting from "../components/Main/NodeSetting"
import SignIn from "../components/Main/SignIn"

import SignUp from "../components/Main/SignUp"
import SiteSetting from "../components/Main/SiteSetting"
import UserSetting from "../components/Main/UserSetting"
import NodeMap from '../components/Main/NodeMap'
import Header from '../containers/Header'

<<<<<<< HEAD
import ForceGraph from '../components/Main/forceGraph/forceGraph';
import data from '../data/data.json';
const MainContainer = () => {
  console.log(`${MainSearchBar},${MapController},${NodeOption},${NodeSetting},${SignIn},${SignUp},${SiteSetting},${UserSetting}`);
  const nodeHoverTooltip = useCallback((node, x, y) => {
    return `<div> ${x}, ${y}
  <b> id : ${node.id}</b>
  <b> name : ${node.name}</b>
  <b> gender : ${node.gender}</b>
</div>`;
}, []);
  return(
    <div id='main-container'>
      <NodeMap />
      <Header />
      <section className="Main">
                <ForceGraph
                    linksData={data.links}
                    nodesData={data.nodes}
                    nodeHoverTooltip={nodeHoverTooltip}
                />
            </section>
    </div>
=======
// import googleTrend from '../utils/googleTrend';
// import validCheck from "../utils/validCheck";

import action from "../redux/modalstatus";

const MainContainer = () => {
  console.log(action)

    const modal= useSelector(state => state.modal);
    const dispatch = useDispatch();

    return(
      <div id='main-container'>
        <NodeMap dispatch={dispatch}/>
        <Header />
        <SiteSetting />
        {modal.settingModal? <SiteSetting />: false}
        {modal.userInfoModal? <UserSetting />: false}
        {modal.signupModal? <SignUp />: false}
        {modal.signinModal? <SignIn />: false}
      </div>
>>>>>>> 0ac64d5f15b576eff4bed2ec251edc8a8bbc5466
  )
}

export default MainContainer

{/*       <NodeSetting></NodeSetting>
      <NodeOption></NodeOption>
      <SiteSetting></SiteSetting>
      <UserSetting></UserSetting>
      <SignIn></SignIn>
      <SignUp></SignUp> */}