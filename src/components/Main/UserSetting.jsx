import React,{ useEffect, useState } from "react"
import axios from 'axios'
import { closeUserinfoModal } from '../../redux/modalstatus'
import { useDispatch, /* useSelector */ } from 'react-redux'

const UserSetting = ()=>{
    let SERVER_URL = process.env.REACT_APP_SERVER_URL
    let dispatch = useDispatch()
    // let userid = useSelector(state=>state.userinfo.id)
    // const [fontSize, setFontSize] = useState(14);
    // const [backGroundColor, setBackGroundColor] = useState("blue");
    const [edit, setEdit] = useState('')
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const eidtHandler = ()=>{
        if(edit){
            setEdit(false)
        }
        else{
            setEdit(true)
        }
    }

    useEffect(()=>{
        axios
        .get(
            `${SERVER_URL}/users/userinfo/2`
            )
            .then(res=>console.log(res))
    },[])

    const closeHandler=()=>{
        dispatch(closeUserinfoModal())
    }
    const submitHandler= ()=>{
        axios
        .post(
            `${SERVER_URL}/users/userinfo`,
            {
                id:2,
                email:'a@naver.com',
                userName,
                password,
            }
        )
        .catch(err=>{
            console.log(err)
        })
    }

    const withdrawHandler = ()=>{
        axios
        .delete(
            `${SERVER_URL}/users/userinfo`,
            {
                params:{
                    id: 2 
                }
            }
        )
    }

    const logouthandler = ()=>{
        axios
        .post(
            `${SERVER_URL}/users/signout`,
        )
    }

    return (
        <div className='darkbackground'>
            <div id='user-container'>
                <ion-icon name="close-outline" onClick={closeHandler}></ion-icon>
                <span className='title'>User Information</span>
                <div className='form'>
                    <div className='box'>
                        <span className='left'>Email</span>
                        <span className='right'>a@naver.com</span>
                    </div>
                    <div className='box'>
                        <span className='left'>Username</span>
                        {edit ? <input type="text" className="username" onChange={(e)=>{setUsername(e.target.value)}}/>
                            :<span className='right'>James</span>
                        }
                    </div>
                    <div className='box'>
                        <span className='left'>Password</span>
                        {edit ? <input type="text" className="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                            :<span className='right'>******</span>
                        }
                    </div>
                    {edit ?
                        <div className='box'>
                            <span className='left'>Password check</span>
                            <input type="text" className="passwordCheck" />
                        </div>
                        :null
                    }
                </div>
                <div className='edit'>
                {edit ? 
                    <div className='ok' onClick={submitHandler}>Eidt</div>
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