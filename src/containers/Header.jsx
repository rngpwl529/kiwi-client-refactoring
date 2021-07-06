import MapController from '../components/Main/MapController'
import MainSearchBar from '../components/Main/MainSearchBar'
import React from 'react';
import ProfileSetting from '../components/Main/ProfileSetting'

const Header = ()=>{

  return(
    <div id = 'header'>
      <img src='images/bitmap.png' alt='KiWi logo' className='logo'/>
      <MapController />
      <div className='right'>
        <MainSearchBar />
        <ProfileSetting />
      </div>
    </div>
  )
}

export default Header