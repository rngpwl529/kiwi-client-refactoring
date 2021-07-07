import { React} from 'react';
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
        <NodeOption />
        {modal.settingModal? <SiteSetting />: false}
        {modal.userInfoModal? <UserSetting />: false}
        {modal.signupModal? <SignUp />: false}
        {modal.signinModal? <SignIn />: false}
      </div>
  )
}

export default MainContainer

