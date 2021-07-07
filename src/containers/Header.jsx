import MapController from '../components/Main/MapController'
import MainSearchBar from '../components/Main/MainSearchBar'
import React from 'react';
import ProfileSetting from '../components/Main/ProfileSetting'

//헤더 ==> 로고, 뒤로가기, root, allow redo, 검색바, mypage, setting, bookmark, img
const Header = ()=>{

  // const 
  // 북마크
  // 유저

  return(
    <div id = 'header'>
      <img src='images/bitmap.png' alt='KiWi logo' className='logo' />
      <MapController />
      <div className='right'>
        <MainSearchBar />
        <ProfileSetting />
      </div>
    </div>
  )
}

export default Header