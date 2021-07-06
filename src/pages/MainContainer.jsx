import { React, useCallback } from 'react';
import MainSearchBar from "../components/Main/MainSearchBar"
import MapController from "../components/Main/MapController"
import NodeOption from "../components/Main/NodeOption"
import NodeSetting from "../components/Main/NodeSetting"
import SignIn from "../components/Main/SignIn"

import SignUp from "../components/Main/SignUp"
import SiteSetting from "../components/Main/SiteSetting"
import UserSetting from "../components/Main/UserSetting"
import NodeMap from '../components/Main/NodeMap'
import Header from '../containers/Header'

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
  )
}

export default MainContainer

{/*       <NodeSetting></NodeSetting>
      <NodeOption></NodeOption>
      <SiteSetting></SiteSetting>
      <UserSetting></UserSetting>
      <SignIn></SignIn>
      <SignUp></SignUp> */}