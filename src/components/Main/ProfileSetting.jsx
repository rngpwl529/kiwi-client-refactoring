import { useState, React } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { openUserinfoModal, openSigninModal, openSettingModal } from '../../redux/modalstatus';
import Keyword from "../Main/Keyword";


const ProfileSetting = ()=>{

    const [keywordOpen, setKeywordOpen] = useState(false)
    const dispatch = useDispatch();
    const store = useSelector((state)=>(state))

    const keywordHandler=()=>{
        if(!keywordOpen){
        setKeywordOpen(true)
            }
            else{
        setKeywordOpen(false)
        }
    }
    const handleProfileClick = () => {
        if (store.sign.isSignIn) {
            dispatch(openUserinfoModal());
        } else {
            dispatch(openSigninModal());
        }
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