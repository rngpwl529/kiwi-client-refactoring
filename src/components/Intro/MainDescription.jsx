import { Link } from "react-router-dom"
import React, {useEffect} from "react"
const MainDescription = () =>{
  useEffect(()=>{
    // let containers = document.querySelectorAll('.container')
    window.addEventListener("scroll",()=>{
      console.log('a')
    })
  },[])
  return(
    <div className='container' id='maindescription-container'>
      <div  className='box'>
        <img className='logo' src='images/logo.svg' alt='KiWi logo'/>
        <div className='content'>
          <section className='main-container text'>
            
            <div className='title'>
              <div className='back-number'>01</div>
              Experience
            </div>
            <div className='descript'>A new journey to mind map</div>
            <div className='sub-descript'>Bringing everyone&apos;s thoughts together creates new ideas.<br/>
            kiwi services create connections to ideas <br />
            and thoughts of many people.<br />
            It can be a roadmap for finding information. <br />
            It becomes a new milestone for accessing new information.
            </div>
            <div className="btnArea">
              <Link to='/main'>
                <button id='goBtn'>
                  <span>LET&apos;S GO</span>
                </button>
              </Link>
            </div>
          </section>
          <div className='imgbox'>
            <svg width="557" height="721" viewBox="0 0 557 721" fill="none" xmlns="http://www.w3.org/2000/svg" className='main-imgbox'>
              <path d="M300 292.799C300 375.642 232.843 442.799 150 442.799C67.1573 442.799 0 375.642 0 292.799C0 209.957 67.1573 142.799 150 142.799C232.843 142.799 300 209.957 300 292.799Z" fill="#5D97DA"/>
              <path d="M556.5 531.299C556.5 586.528 511.728 631.299 456.5 631.299C401.272 631.299 356.5 586.528 356.5 531.299C356.5 476.071 401.272 431.299 456.5 431.299C511.728 431.299 556.5 476.071 556.5 531.299Z" fill="#5D97DA"/>
              <rect x="60.5" y="147.299" width="476" height="476" rx="238" fill="white"/>
              <line x1="468.946" y1="44.4775" x2="490.441" y2="10.7433" stroke="gray" strokeWidth="10"/>
              <line x1="462.856" y1="16.8296" x2="496.59" y2="38.3239" stroke="gray" strokeWidth="10"/>
              <line x1="60.7164" y1="633.838" x2="71.4635" y2="616.971" stroke="gray" strokeWidth="3"/>
              <line x1="58.2904" y1="619.82" x2="75.1575" y2="630.567" stroke="gray" strokeWidth="3"/>
              <line x1="439.047" y1="711.139" x2="458.195" y2="705.364" stroke="gray" strokeWidth="3"/>
              <line x1="446.352" y1="698.932" x2="452.127" y2="718.08" stroke="gray" strokeWidth="3"/>
            </svg>
          </div>
          <a href='#maindescription-container' className='top'>TOP</a>
        </div>
      </div>
    </div>
  )
}

export default MainDescription