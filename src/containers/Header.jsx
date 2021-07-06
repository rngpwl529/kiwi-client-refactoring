import MapController from '../components/Main/MapController'
import MainSearchBar from '../components/Main/MainSearchBar'
import React,{useState} from 'react';
import Keyword from '../components/Main/Keyword'

const Header = ()=>{
  const [keywordOpen, setKeywordOpen] = useState(false)
  const keywordHandler=()=>{
    if(!keywordOpen){
      setKeywordOpen(true)
    }
    else{
      setKeywordOpen(false)
    }
  }

  return(
    <div id = 'header'>
      <img src='images/bitmap.png' alt='KiWi logo' className='logo'/>
      <MapController />
      <div className='right'>
        <MainSearchBar />
        <ion-icon name="person-outline"></ion-icon>
        <ion-icon name="settings-outline"></ion-icon>
        <ion-icon name="bookmark-outline" onClick={keywordHandler}></ion-icon>
        <ion-icon name="image-outline"></ion-icon>
      </div>
      {keywordOpen ? <Keyword setKeywordOpen={setKeywordOpen}/>:null}
    </div>
  )
}

export default Header