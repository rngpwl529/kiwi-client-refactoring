import { React} from 'react';
// import MainSearchBar from "../components/Main/MainSearchBar"
// import MapController from "../components/Main/MapController"
// import NodeOption from "../components/Main/NodeOption"
// import NodeSetting from "../components/Main/NodeSetting"
import { useSelector, /* useDispatch */ } from 'react-redux';
import SignIn from "../components/Main/SignIn"

import SignUp from "../components/Main/SignUp"
import SiteSetting from "../components/Main/SiteSetting"
import UserSetting from "../components/Main/UserSetting"
import NodeMap from '../components/Main/NodeMap'
import Header from '../containers/Header'
import Capture from '../components/Main/capture'

// import googleTrend from '../utils/googleTrend';
// import validCheck from "../utils/validCheck";

// import action from "../redux/modalstatus";

const MainContainer = () => {

    const state= useSelector(state => state);
    console.log(state)

    return(
      <div id='main-container'>
        <NodeMap />
        <Header />
        {state.modal.settingModal? <SiteSetting />: false}
        {state.modal.userInfoModal? <UserSetting />: false}
        {state.modal.signupModal? <SignUp />: false}
        {state.modal.signinModal? <SignIn />: false}
        {state.modal.captureModal? <Capture />: false}
      </div>
  )
}

export default MainContainer

