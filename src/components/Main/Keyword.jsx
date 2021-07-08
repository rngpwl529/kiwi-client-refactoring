import React,{useEffect} from "react"
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config();


const Keyword = ({setKeywordOpen}) => {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL
    let keywords = ['IT','Javascript','Python','D3','Function','Class','Position','Css']
    let colors = ['#D5D6EA', '#F6F6EB', '#D7ECD9', '#F5D5CB', '#F6ECF5', '#F3DDF2','#D8F0FA','#C7DEFA','#91EBE8','#C2F7EB','#FCE0E8','#FFF0F0']
    
    useEffect(()=>{
        let keywordEle = document.querySelectorAll('.keyword')
        keywordEle.forEach(keyword=>{
            keyword.addEventListener('mouseover',()=>{
                keyword.classList.add('hover')
            })
            keyword.addEventListener('mouseleave',()=>{
                keyword.classList.remove('hover')
            })

        })
        // keywordEle.map(keyword=>{
        //     keyword.addEventListener('mouseover',()=>{
        //         keyword.classList.add('hover')
        //     })
        // })
        // keywordEle.addEventListener('mouseleave',()=>{
        //     keyword.classList.remove('hover')
        // })
    },[])

    const handler= ()=>{
        setKeywordOpen(false)
    }

    axios
    .get(
        `${SERVER_URL}/users/keyword`,  //서버에서 params로 받아야함
        {params:{
            id: 2
        }}
    )
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

    

    // keyword.addEventListener('hover',function(){
    //     keyword.classList.toggle('hover')
    // })

    return (
        <div id='keyword-container'>
            <ion-icon name="close-outline" onClick={handler}></ion-icon>
            <div>Keywrod Bookmark</div>
            <ul>
                {keywords.map((keyword,idx) => (
                    <li 
                    key={idx}  
                    className='keyword' 
                    style={{backgroundColor: colors[Math.floor(Math.random()*10)]}}
                    >{keyword}
                    <div>
                        <ion-icon name="close-outline"></ion-icon>
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Keyword
