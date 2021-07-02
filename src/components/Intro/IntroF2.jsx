import React from "react"

const IntroF2 = () =>{
  return(
    <div className='container' id='introF2-container'>
      <div className='content'>
        <div className='back-image'>
          <svg width="1441" height="1024" viewBox="0 0 1441 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="623.861" y1="690.478" x2="645.355" y2="656.743" stroke="gray" strokeWidth="10"/>
            <line x1="617.771" y1="662.83" x2="651.505" y2="684.324" stroke="gray" strokeWidth="10"/>
            <line x1="358.861" y1="131.478" x2="380.355" y2="97.7436" stroke="gray" strokeWidth="10"/>
            <line x1="352.771" y1="103.83" x2="386.505" y2="125.324" stroke="gray" strokeWidth="10"/>
            <line x1="1193.11" y1="88.8841" x2="1231.23" y2="100.995" stroke="gray" strokeWidth="3"/>
            <line x1="1218.24" y1="76.0779" x2="1206.13" y2="114.201" stroke="gray" strokeWidth="3"/>
            <line x1="130.672" y1="853.899" x2="149.82" y2="848.124" stroke="gray" strokeWidth="3"/>
            <line x1="137.977" y1="841.692" x2="143.752" y2="860.84" stroke="gray" strokeWidth="3"/>
          </svg>          
        </div>
        <section className='main-container text'>
          <div className='title'><div className='back-number'>03</div>Mark it</div>
          <div className='descript'>Not to get lost in the sea of information.</div>
          <div className='sub-descript'>You can save the keywords and images you looked up.<br />
          Always mark a milestone so you don&apos;t get lost.<br />
          You can find the way to go.
          </div>
        </section>
        <div className='imgbox'>
          <svg width="597" height="642" viewBox="0 0 597 642" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M389 438.5C389 545.919 301.919 633 194.5 633C87.0806 633 0 545.919 0 438.5C0 331.081 87.0806 244 194.5 244C301.919 244 389 331.081 389 438.5Z" fill="#5D97DA" className='move'/>
            <path d="M518 138C518 193.228 473.228 238 418 238C362.772 238 318 193.228 318 138C318 82.7715 362.772 38 418 38C473.228 38 518 82.7715 518 138Z" fill="#5D97DA" className='move'/>
            <rect x="76" y="80" width="520.747" height="500" rx="241" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default IntroF2