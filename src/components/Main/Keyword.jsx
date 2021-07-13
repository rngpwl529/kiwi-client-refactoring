import React,{useEffect, useState} from "react"
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {getBookmarkKeyword} from '../../redux/userinfo'


const Keyword = ({setKeywordOpen}) => {
    const SERVER_API = process.env.REACT_APP_SERVER_API
    const [deleteKeyword, setDeleteKeyword] = useState('')
    let colors = ['#D5D6EA', '#F6F6EB', '#D7ECD9', '#F5D5CB', '#F6ECF5', '#F3DDF2','#D8F0FA','#C7DEFA','#91EBE8','#C2F7EB','#FCE0E8','#FFF0F0']
    
    const state= useSelector(state => state.userinfo);
    // const parentNode = useSelector(state=> state.node.parentNode)
    const dispatch = useDispatch()
    let keywords = useSelector(state=>state.userinfo.bookmarkKeyword)
    console.log(keywords)
    //키워드 가져오기
    useEffect(()=>{
        axios
        .get(
            `${SERVER_API}/users/keyword/${state.id}`  //서버에서 params로 받아야함
            )
            .then((res)=>{
                dispatch(getBookmarkKeyword(res.data.keyword))
            })
            .catch((err)=>{
                console.log(err)
            })
        },[deleteKeyword])
        
    const handler= ()=>{
        setKeywordOpen(false)
    }
    
    // 키워드 삭제
    const deleteHandler = (e)=>{
        axios
        .delete(
            `${SERVER_API}/users/keyword/${state.id}/${e.target.parentNode.previousSibling.nodeValue}`
            )
            .then(res=>{
                console.log(res)
                setDeleteKeyword(e.target.parentNode.previousSibling.nodeValue)
            })
    }

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
    },[keywords])
    

    // keyword.addEventListener('hover',function(){
    //     keyword.classList.toggle('hover')
    // })

    return (
        <div id='keyword-container'>
            <ion-icon name="close-outline" onClick={handler}></ion-icon>
            <div>Keywrod Bookmark</div>
            <ul>
                {keywords.map((keyword,idx) => {
                    if(keyword !== '키워드를 추가하세요.'){
                        return(
                            <li 
                            key={idx}  
                            className='keyword' 
                            style={{backgroundColor: colors[Math.floor(Math.random()*10)]}}
                            onClick={deleteHandler}
                            >{keyword}
                            <div>
                                <ion-icon name="close-outline"></ion-icon>
                            </div>
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}

export default Keyword
