import React from 'react';
import { useSelector } from 'react-redux';

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

const MainContainer = () => {

    const state= useSelector(state => state);
    console.log(state)

    return(
      <div id='main-container'>
        <NodeMap />
        <Header />
        {state.modal.settingModal? <SiteSetting />: false}
        {state.modal.userinfoModal? <UserSetting />: false}
        {state.modal.signupModal? <SignUp />: false}
        {state.modal.signinModal? <SignIn />: false}
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