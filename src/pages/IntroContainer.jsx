import React from 'react';
import MainDescription from '../components/Intro/MainDescription'
import IntroF1 from '../components/Intro/IntroF1'
import IntroF2 from '../components/Intro/IntroF2'
import IntroF3 from '../components/Intro/IntroF3'
import IntroFooter from '../components/Intro/IntroFooter'

const IntroContainer = ()=>{
  let introTop = document.querySelector('.container');
  console.log(introTop);
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