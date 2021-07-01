import { useState } from "react"

const ProfileSetting = ()=>{

    const [settingIsOpen, setsettingIsOpen] = useState(false);
    const [profileIsOpen, setprofileIsOpen] = useState(false);

    return (
        <div>
            <img alt="siteSetting" onClick={()=>{}}/>
            <img alt="userSetting" onClick={()=>{}}/>
        </div>
    )
}
  
export default ProfileSetting