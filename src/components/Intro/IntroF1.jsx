import React from "react"

const IntroF1 = () =>{
  return(
    <div className='container' id='introF1-container' >
      <div className='content'>
        <div className='back-image'>
          <svg width="1441" height="981" viewBox="0 0 1441 981" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="689.414" y1="195.759" x2="732.403" y2="128.29" stroke="gray" strokeWidth="10"/>
            <line x1="677.33" y1="140.993" x2="744.798" y2="183.981" stroke="gray" strokeWidth="10"/>
            <line x1="1011.67" y1="258.899" x2="1030.82" y2="253.124" stroke="gray" strokeWidth="3"/>
            <line x1="1018.98" y1="246.692" x2="1024.75" y2="265.84" stroke="gray" strokeWidth="3"/>
            <line x1="266.111" y1="825.884" x2="304.234" y2="837.994" stroke="gray" strokeWidth="3"/>
            <line x1="291.243" y1="813.078" x2="279.132" y2="851.2" stroke="gray" strokeWidth="3"/>
            <line x1="980.547" y1="853.84" x2="999.695" y2="848.065" stroke="gray" strokeWidth="3"/>
            <line x1="987.853" y1="841.633" x2="993.628" y2="860.781" stroke="gray" strokeWidth="3"/>
          </svg>
        </div>
        <div className='imgbox'>
        <svg width="546" height="599" viewBox="0 0 546 599" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M389 404.5C389 511.919 301.919 599 194.5 599C87.0806 599 0 511.919 0 404.5C0 297.081 87.0806 210 194.5 210C301.919 210 389 297.081 389 404.5Z" fill="#5D97DA" className='move'/>
          <rect x="70" y="60" width="476" height="476" rx="238" fill="white"/>
          <path d="M516 96C516 137.421 482.421 171 441 171C399.579 171 366 137.421 366 96C366 54.5786 399.579 21 441 21C482.421 21 516 54.5786 516 96Z" fill="#5D97DA" className='move'/>
        </svg>
        </div>
        <section className='main-container text'>
          <div className='title'><div className='back-number'>02</div>Join us</div>
          <div className='descript'>To Create Information Map</div>
          <div className='sub-descript'>You can create categories together <br />
            to associate related keywords. Create an information map <br />
            that can easily pass <br />
            through the sea of information through this.
          </div>
        </section>
        <a href='#maindescription-container'>TOP</a>
      </div>
    </div>
  )
}

export default IntroF1