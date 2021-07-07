import { useState, React } from "react";
import { useDispatch } from 'react-redux';
import { openSigninModal, openSettingModal } from '../../redux/modalstatus';
import Keyword from "../Main/Keyword";


const ProfileSetting = ()=>{

    const [keywordOpen, setKeywordOpen] = useState(false)
    const dispatch = useDispatch();

    const keywordHandler=()=>{
        if(!keywordOpen){
        setKeywordOpen(true)
            }
            else{
        setKeywordOpen(false)
        }
    }
    const handleProfileClick = () => {
        dispatch(openSigninModal());
    }
    const handleSettingClick = () => {
        dispatch(openSettingModal());
    }
    return (
        <div id='profile-container'>
            <ion-icon name="person-outline" onClick={handleProfileClick} ></ion-icon>
            <ion-icon name="settings-outline" onClick={handleSettingClick}></ion-icon>
            <ion-icon name="bookmark-outline" onClick={keywordHandler}></ion-icon>
            <ion-icon name="image-outline"></ion-icon>
            {keywordOpen ? <Keyword setKeywordOpen={setKeywordOpen}/>:null}
        </div>
    )
}

export default ProfileSetting