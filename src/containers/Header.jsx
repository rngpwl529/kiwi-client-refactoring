import MapController from '../components/Main/MapController'
import MainSearchBar from '../components/Main/MainSearchBar'

const Header = ()=>{
  return(
    <div id = 'header'>
      <img src='images/bitmap.png' alt='KiWi logo' className='logo'/>
      <MapController />
      <div className='right'>
        <MainSearchBar />
        <ion-icon name="person-outline"></ion-icon>
        <ion-icon name="settings-outline"></ion-icon>
        <ion-icon name="bookmark-outline"></ion-icon>
        <ion-icon name="image-outline"></ion-icon>
      </div>
    </div>
  )
}

export default Header