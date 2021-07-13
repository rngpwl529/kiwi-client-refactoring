import MapController from '../components/Main/MapController'
import MainSearchBar from '../components/Main/MainSearchBar'
import React from 'react';
import ProfileSetting from '../components/Main/ProfileSetting'
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

//헤더 ==> 로고, undo, root, redo, searchbar, mypage, setting, bookmark, img(캡처)
const Header = ()=>{

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
    <div id = 'header'>
      <Link to='/intro'>
      <img src='images/logo.svg' alt='KiWi logo' className='logo' />
      </Link>
      
      <MapController />
      <div className='right'>
        <MainSearchBar />
        <ProfileSetting />
      </div>
    </div>
  )
}

export default Header