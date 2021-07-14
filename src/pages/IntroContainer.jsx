import React,{useEffect} from 'react';
import MainDescription from '../components/Intro/MainDescription'
import IntroF1 from '../components/Intro/IntroF1'
import IntroF2 from '../components/Intro/IntroF2'
import IntroF3 from '../components/Intro/IntroF3'
import IntroFooter from '../components/Intro/IntroFooter'

const IntroContainer = ()=>{
  useEffect(()=>{
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });                            
    });
    
    document.querySelectorAll('.imgbox svg').forEach((wrapper,idx) => {
      if(idx!==0){
        io.observe(wrapper)
      }
    });
  },[])
  return(
    <div id='intro-container'>
      <MainDescription />
      <IntroF1 />
      <IntroF2 />
      <IntroF3 />
      <IntroFooter />
    </div>
  )
}

export default IntroContainer