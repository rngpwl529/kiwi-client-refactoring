import React from "react"
import axios from 'axios'
// require('dotenv').config();

const Keyword = ({setKeywordOpen}) => {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL
    let keywords = ['IT','Javascript','Python','D3','Function','Class','Position','Css']
    let colors = ['#D5D6EA', '#F6F6EB', '#D7ECD9', '#F5D5CB', '#F6ECF5', '#F3DDF2','#D8F0FA','#C7DEFA','#91EBE8','#C2F7EB','#FCE0E8','#FFF0F0']
    const handler= ()=>{
        setKeywordOpen(false)
    }

    axios
    .get(
        `${SERVER_URL}/users/keyword`,
        {params:{
            userId: 2
        }}
    )
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

    return (
        <div id='keyword-container'>
            <ion-icon name="close-outline" onClick={handler}></ion-icon>
            <div>Keywrod Bookmark</div>
            <ul>
                {keywords.map((keyword,idx) => (
                    <li key={idx}  style={{backgroundColor: colors[Math.floor(Math.random()*10)]}}>{keyword}</li>
                ))}
            </ul>
        </div>
    )
}

export default Keyword
