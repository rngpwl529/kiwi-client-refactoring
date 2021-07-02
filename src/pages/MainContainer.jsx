import MainSearchBar from "../components/Main/MainSearchBar"
import MapController from "../components/Main/MapController"
import NodeOption from "../components/Main/NodeOption"
import NodeSetting from "../components/Main/NodeSetting"
import SignIn from "../components/Main/SignIn"
import Signin from "../components/Main/SignIn"
import SignUp from "../components/Main/SignUp"
import SiteSetting from "../components/Main/SiteSetting"
import UserSetting from "../components/Main/UserSetting"
import NodeMap from '../components/Main/NodeMap'
import Header from '../containers/Header'

const MainContainer = ()=>{
  return(
    <div id='main-container'>
      <NodeMap />
      <Header />
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