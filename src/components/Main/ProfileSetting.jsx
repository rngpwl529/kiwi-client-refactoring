import { React } from "react";
import Popup from "reactjs-popup";

import ScreenCapture from "./ScreenCapture";
import "./ProfileSetting.css";

import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { openUserinfoModal, openSigninModal, openSettingModal } from '../../redux/modalstatus';
<<<<<<< HEAD
import Keyword from "./Keyword";
=======

import Keyword from "../Main/Keyword";
>>>>>>> f2cd3abac9c0690a2a088abe84a3950993631a67

const ProfileSetting = () => {

    const [keywordOpen, setKeywordOpen] = useState(false)
    const dispatch = useDispatch();
    const store = useSelector((state)=>(state))

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
    const handleSave = () => {
        console.log(title, screenCapture);
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
                <ion-icon name="image-outline" onClick={onStartCapture}></ion-icon>
                {keywordOpen ? <Keyword setKeywordOpen={setKeywordOpen}/>:null}
            </div>
            <Popup open={open} modal closeOnDocumentClick>
              <div className="modal">
                <div className="modal__header">
                  <button onClick={closeModal}>&times;</button>
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
                  <a href={screenCapture} download={title}>SAVE</a>
                  <button onClick={handleSave}>Save</button>
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

// class App extends Component {
//   state = {
//     screenCapture: "",
//     open: false,
//     title: "gimmeatitle"
//   };

//   handleScreenCapture = screenCapture => {
//     this.setState(
//       {
//         screenCapture
//       },
//       () => {
//         screenCapture && this.openModal();
//       }
//     );
//   };

//   openModal = () => {
//     this.setState({ open: true });
//   };

//   closeModal = () => {
//     this.setState({ open: false, screenCapture: "" });
//   };

//   handleOnChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   handleSave = () => {
//     console.log(this.state.title, this.state.screenCapture);
//   };

//   render() {
//     const { screenCapture } = this.state;
//     console.log(screenCapture);
//     return (
//       <ScreenCapture onEndCapture={this.handleScreenCapture}>
//         {({ onStartCapture }) => (
//           <>
//             <div id='profile-container'>
//                 <ion-icon name="person-outline" onClick={() => { handleProfileClick(); }} ></ion-icon>
//                 <ion-icon name="settings-outline" onClick={() => { handleSettingClick(); }}></ion-icon>
//                 <ion-icon name="bookmark-outline" onClick={() => { keywordHandler(); }}></ion-icon>
//                 <ion-icon name="image-outline" onClick={()=>{onStartCapture}}></ion-icon>
//                 {keywordOpen ? <Keyword setKeywordOpen={setKeywordOpen}/>:null}
//             </div>
//             <Popup open={this.state.open} modal closeOnDocumentClick>
//               <div className="modal">
//                 <div className="modal__header">
//                   <button onClick={this.closeModal}>&times;</button>
//                 </div>
//                 <div className="modal__body">
//                   <div>
//                     <label>Title</label>
//                     <input
//                       type="text"
//                       onChange={this.handleOnChange}
//                       name="title"
//                       value={this.state.title}
//                     />
//                   </div>
//                   <div className="image__container">
//                     {screenCapture && (
//                       <img src={screenCapture} alt="screen capture" />
//                     )}
//                   </div>
//                 </div>
//                 <div className="modal__footer">
//                   <button onClick={this.handleSave}>Save</button>
//                   <button onClick={this.closeModal}>Cancel</button>
//                 </div>
//               </div>
//             </Popup>
//           </>
//         )}
//       </ScreenCapture>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));
