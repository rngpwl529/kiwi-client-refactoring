import React,{ useEffect, useState } from "react"
import axios from 'axios'
import { closeUserinfoModal } from '../../redux/modalstatus'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserInfo } from '../../redux/userinfo'

const UserSetting = ()=>{
    let SERVER_API = process.env.REACT_APP_SERVER_API
    let dispatch = useDispatch()
    // let userid = useSelector(state=>state.userinfo.id)
    // const [fontSize, setFontSize] = useState(14);
    // const [backGroundColor, setBackGroundColor] = useState("blue");
    const [edit, setEdit] = useState('')
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let userinfo = useSelector(state=>state.userinfo)

    const eidtHandler = ()=>{
        if(edit){
            setEdit(false)
        }
        else{
            setEdit(true)
        }
    }

    
    
    const closeHandler=()=>{
        dispatch(closeUserinfoModal())
    }
    
    const submitHandler= ()=>{
        axios
        .post(
            `${SERVER_API}/users/userinfo`,
            {
                id:userinfo.id,
                email: userinfo.email,
                userName,
                password,
            }
        )
        .then(
            setEdit(false),
            console.log(userName),
            dispatch(updateUserInfo({userName:userName}))
        )
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        axios
        .get(
            `${SERVER_API}/users/userinfo/${userinfo.id}`
            )
            .then(res=>{
                dispatch(updateUserInfo(res.data.userData))
            })
        console.log('실행')
    },[])

    const withdrawHandler = ()=>{
        axios
        .delete(
            `${SERVER_API}/users/userinfo${userinfo.id}`,
        )
    }

    const logouthandler = ()=>{
        axios
        .post(
            `${SERVER_API}/users/signout`,
        )
    }

    console.log(userinfo)
    
    return (
        <div className='darkbackground'>
            <div id='user-container'>
                <ion-icon name="close-outline" onClick={closeHandler}></ion-icon>
                <span className='title'>User Information</span>
                <div className='form'>
                    <div className='box'>
                        <span className='left'>Email</span>
                        <span className='right'>{userinfo.email}</span>
                    </div>
                    <div className='box'>
                        <span className='left'>Username</span>
                        {edit ? <input type="text" className="username" 
                        value={userinfo.userName}
                        onChange={(e)=>{setUsername(e.target.value)}}/>
                            :<span className='right'>{userinfo.userName}</span>
                        }
                    </div>
                    <div className='box'>
                        <span className='left'>Password</span>
                        {edit ? <input type="password" className="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                            :<span className='right'>******</span>
                        }
                    </div>
                    {edit ?
                        <div className='box'>
                            <span className='left'>Password check</span>
                            <input type="password" 
                            
                            className="passwordCheck" />
                        </div>
                        :null
                    }
                </div>
                <div className='edit'>
                {edit ? 
                    <>
                    <div className='ok' onClick={submitHandler}>Edit</div>
                    <div className="cancle" onClick={eidtHandler}>cancle</div>
                    </>
                    :<div>
                        <div className='logout' onClick={logouthandler}>Logout</div>
                        <div className='user-edit' onClick={eidtHandler}>Edit</div>
                        <div className='withdraw' onClick={withdrawHandler}>Withdraw</div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default UserSetting