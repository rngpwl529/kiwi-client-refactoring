import { useState } from "react"
import React from "react"
import Keyword from "../Main/Keyword"
const ProfileSetting = ()=>{

    // const [settingIsOpen, setsettingIsOpen] = useState(false);
    // const [profileIsOpen, setprofileIsOpen] = useState(false);
    const [keywordOpen, setKeywordOpen] = useState(false)
    const keywordHandler=()=>{
        if(!keywordOpen){
        setKeywordOpen(true)
            }
            else{
        setKeywordOpen(false)
        }
    }

    return (
        <div id='profile-container'>
            <ion-icon name="person-outline"></ion-icon>
            <ion-icon name="settings-outline"></ion-icon>
            <ion-icon name="bookmark-outline" onClick={keywordHandler}></ion-icon>
            <ion-icon name="image-outline"></ion-icon>
            {keywordOpen ? <Keyword setKeywordOpen={setKeywordOpen}/>:null}
        </div>
    )
}

export default ProfileSetting