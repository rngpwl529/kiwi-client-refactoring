import MainSearchBar from "../components/Main/MainSearchBar"
import MapController from "../components/Main/MapController"
import NodeOption from "../components/Main/NodeOption"
import NodeSetting from "../components/Main/NodeSetting"
import SignIn from "../components/Main/SignIn"
import Signin from "../components/Main/SignIn"
import SignUp from "../components/Main/SignUp"
import SiteSetting from "../components/Main/SiteSetting"
import UserSetting from "../components/Main/UserSetting"

const MainContainer = ()=>{
  return(
    <div>
        <MainSearchBar></MainSearchBar>
        <MapController></MapController>
        <NodeSetting></NodeSetting>
        <NodeOption></NodeOption>
        <SiteSetting></SiteSetting>
        <UserSetting></UserSetting>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
  )
}

export default MainContainer