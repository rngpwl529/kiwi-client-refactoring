
import React from 'react';
import { useSelector } from 'react-redux';
import SignIn from "../components/Main/SignIn"
import SignUp from "../components/Main/SignUp"
import SiteSetting from "../components/Main/SiteSetting"
import UserSetting from "../components/Main/UserSetting"
import NodeOption from "../components/Main/NodeOption"
import NodeSetting from '../components/Main/NodeSetting';
// import { useDispatch } from 'react-redux';

//헤더 ==> 로고, undo, root, redo, searchbar, mypage, setting, bookmark, img(캡처)
const ModalContainer = ()=>{
  const { settingModal, userInfoModal, signupModal, signinModal, nodeoptionModal, nodesettingModal } = useSelector(state => state.modal);
  
  // let SERVER_URL = process.env.REACT_APP_SERVER_URL;
  // const [ undo, setUndo ] = useState("");
  // const [ root, setRoot ] = useState("");
  // const [ redo, setRedo] = useState("");
  // const [ searchBar, setSearchBar ] = useState("");
  // const [ mypage, setMypage ] = useState("");
  // const [ setting, setSetting ] = useState("");
  // const [ bookmark, setBookmark ] = useState("");
  // const [ img, setImg ] = useState("");

  // const dispatch = useDispatch();

  // const handleOnClick = () => {
  //   axios
  //   .post(
  //     `${SERVER_URL}/headers`,
  //     {
  //       undo
  //       ,root
  //       ,redo
  //       ,searchBar
  //       ,mypage
  //       ,setting
  //       ,bookmark
  //       ,img
  //     }
  //   )
  //   .then(res=>{
  //     console.log(res)
  // })
  // .catch(err=>{
  //     console.log(err)
  // })
// }

  return(
    <div id = 'modal-container'>
      {settingModal ? <SiteSetting /> : false}
      {userInfoModal ? <UserSetting /> : false}
      {signupModal ? <SignUp /> : false}
      {signinModal ? <SignIn /> : false}
      {nodeoptionModal ? <NodeOption/> : false}
      {nodesettingModal ? <NodeSetting cord={nodesettingModal}/> : false}
    </div>
  )
}

export default ModalContainer;