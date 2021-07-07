import React,{ useState } from "react";
import { useDispatch } from 'react-redux';
import { closeUserinfoModal } from '../../redux/modalstatus';


const UserSetting = ()=>{

    const dispatch = useDispatch();
    const [edit, setEdit] = useState('')

    const eidtHandler = ()=>{
        if(edit){
            setEdit(false)
        }
        else{
            setEdit(true)
        }
    }
    const handleCloseButtonClick = () => {
        dispatch(closeUserinfoModal());
    }

    // const submitHandler= ()=>{
    //     axios
    //     .post(
    //         ''
    //     )
    // }

    return (
        <div id='user-container'>
            <ion-icon name="close-outline" onClick={handleCloseButtonClick}></ion-icon>
            <span className='title'>User Information</span>
            <div className='form'>
                <div className='box'>
                    <span className='left'>Email</span>
                    <span className='right'>a@naver.com</span>
                </div>
                <div className='box'>
                    <span className='left'>Username</span>
                    {edit ? <input type="text" className="username" />
                        :<span className='right'>James</span>
                    }
                </div>
                <div className='box'>
                    <span className='left'>Password</span>
                    {edit ? <input type="text" className="username" />
                        :<span className='right'>******</span>
                    }
                </div>
                {edit ?
                    <div className='box'>
                        <span className='left'>Password check</span>
                        <input type="text" className="username" />
                    </div>
                    :null
                }
            </div>
            <div className='edit'>
            {edit ? 
                <div className='ok' /* onClick={submitHandler} */>Eidt</div>
                :<div>
                    <div className='logout'>Logout</div>
                    <div className='user-edit' onClick={eidtHandler}>Edit</div>
                    <div className='withdraw'>Withdraw</div>
                </div>
                }
            </div>
        </div>
    )
}

export default UserSetting