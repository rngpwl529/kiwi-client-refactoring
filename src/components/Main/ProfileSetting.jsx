import { React } from "react";
import Popup from "reactjs-popup";

import ScreenCapture from "./ScreenCapture";
import "./ProfileSetting.css";

import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { openUserinfoModal, openSigninModal, openSettingModal } from '../../redux/modalstatus';
import Keyword from "./Keyword";

const ProfileSetting = () => {

    const [keywordOpen, setKeywordOpen] = useState(false)
    const dispatch = useDispatch();
    const store = useSelector((state)=>(state))

    console.log(store)

    const [screenCapture, setScreenCapture] = useState("");
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("capture");


    const keywordHandler=()=>{
        if(!keywordOpen && store.sign.isSignIn){
            setKeywordOpen(true)
        }
        else if(!store.sign.isSignIn){
            dispatch(openSigninModal())
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
        if(store.sign.isSignIn){
            dispatch(openSettingModal());
        }
        else{
            dispatch(openSettingModal())
        }
    }

    const handleScreenCapture = screenCapture => {
        setScreenCapture(screenCapture);
        screenCapture && setOpen(true);
    };
    const handleOnChange = e => {
        setTitle(e.target.value);
    };
    const closeModal = () => {
        setOpen(false);
        setScreenCapture("");
    };


    return (
        <ScreenCapture onEndCapture={handleScreenCapture}>
        {({ onStartCapture }) => (
          <>
            <div id='profile-container'>
                <ion-icon name="person-outline" onClick={() => { handleProfileClick(); }} ></ion-icon>
                <ion-icon name="settings-outline" onClick={() => { handleSettingClick(); }}></ion-icon>
                <ion-icon name="bookmark-outline" onClick={() => { keywordHandler(); }}></ion-icon>
                <ion-icon name="image-outline" onClick={onStartCapture} id='capture-icon'></ion-icon>
                {keywordOpen ? <Keyword setKeywordOpen={setKeywordOpen}/>:null}
            </div>
            <Popup open={open} modal closeOnDocumentClick>
              <div className="modal">
                <div className="modal__header">
                    <ion-icon name='close-outline' onClick={closeModal}></ion-icon>
                  {/* <button onClick={closeModal}>&times;</button> */}
                </div>
                <div className="modal__body">
                  <div>
                    <label>Title</label>
                    <input
                      type="text"
                      onChange={handleOnChange}
                      name="title"
                      value={title}
                    />
                  </div>
                  <div className="image__container">
                    {screenCapture && (
                      <img src={screenCapture} alt="screen capture" />
                    )}
                  </div>
                </div>
                <div className="modal__footer">
                  <a href={screenCapture} download={title}><button>Save</button></a>
                  <button onClick={closeModal}>Cancel</button>
                </div>
              </div>
            </Popup>
          </>
        )}
      </ScreenCapture>
    )
}

export default ProfileSetting;