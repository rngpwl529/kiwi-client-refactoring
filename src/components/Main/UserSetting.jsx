import React,{ useState } from "react"
import axios from 'axios'

const UserSetting = ()=>{
    let SERVER_URL = process.env.REACT_APP_SERVER_URL

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
        .then(
            console.log('userinfo변경 성공')
        )
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

    return (
        <div id='user-container'>
            <ion-icon name="close-outline"></ion-icon>
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
                    <div className='logout'>Logout</div>
                    <div className='user-edit' onClick={eidtHandler}>Edit</div>
                    <div className='withdraw' onClic={withdrawHandler}>Withdraw</div>
                </div>
                }
            </div>
        </div>
    )
}

export default UserSetting