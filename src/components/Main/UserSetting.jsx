import React,{ useEffect, useState } from "react"
import axios from 'axios'
import { closeUserinfoModal } from '../../redux/modalstatus'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserInfo } from '../../redux/userinfo'

const SERVER_API = process.env.REACT_APP_SERVER_API;

const UserSetting = ()=>{
    
    let dispatch = useDispatch()
    // let userid = useSelector(state=>state.userinfo.id)
    // const [fontSize, setFontSize] = useState(14);
    // const [backGroundColor, setBackGroundColor] = useState("blue");
    const [edit, setEdit] = useState('');
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let userinfo = useSelector(state=>state.userinfo)

    const editHandler = ()=>{
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
    
    const submitHandler = () => {
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

    useEffect(() => {
        let token = localStorage.getItem('token');
        axios
        .get(
            `${SERVER_API}/users/userinfo`,
            {
                headers: {'authorization': "Bearer " + token}
            }
        )
            .then(res => {
                console.log(res.data.userData);
                dispatch(updateUserInfo(res.data.userData))
            })
            .catch(() => {
                alert('올바르지 않은 요청입니다.');
            })
    },[])

    const withdrawHandler = () => {
        const token = localStorage.getItem('token');
        //TODO: 회원삭제 요청에 대한 확인을 위한 모달창
        axios
        .delete(
            `${SERVER_API}/users/userinfo`,
            {
                headers: {'authorization' : "Bearer " + token}
            }
        )
            .then(() => {
                // localStorage.clear();
                localStorage.setItem("logout", "true")
                window.location.replace("http://localhost:3000/intro");
                console.log("주소 이동");
            })
            .catch(() => alert("올바르지 않은 요청입니다."));
    }

    const logouthandler = ()=>{
        const token = localStorage.getItem('token');
        axios
            .get(
                `${SERVER_API}/users/signout`,
                {
                    headers: { 'authorization': `Bearer ${token}` }
                }
            )
            .then(() => {
                localStorage.clear();
                window.location.reload();
            })
            .catch(() => alert("올바르지 않은 요청입니다."));
    }
    
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
                    <div className="cancle" onClick={editHandler}>cancle</div>
                    </>
                    :<div>
                        <div className='logout' onClick={logouthandler}>Logout</div>
                        <div className='user-edit' onClick={editHandler}>Edit</div>
                        <div className='withdraw' onClick={withdrawHandler}>Withdraw</div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default UserSetting