import React from 'react';
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

// import googleTrend from '../utils/googleTrend';
// import validCheck from "../utils/validCheck";

const MainContainer = () => {

    const modal= useSelector(state => state.modal);
    const dispatch = useDispatch();

    return(
      <div id='main-container'>
        <NodeMap dispatch={dispatch}/>
        <Header />
        {modal.settingModal? <SiteSetting dispatch={dispatch}/>: false}
        {modal.userInfoModal? <UserSetting />: false}
        {modal.signupModal? <SignUp />: false}
        {modal.signinModal? <SignIn />: false}
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