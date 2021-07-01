import {Link} from 'react-router-dom'

const IntroF1 = () =>{
  return(
    <div className='container' id='introF1-container' >
      <div className='content'>
        <div className='back-image'>
        <svg width="1441" height="981" viewBox="0 0 1441 981" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="689.414" y1="195.759" x2="732.403" y2="128.29" stroke="gray" stroke-width="10"/>
          <line x1="677.33" y1="140.993" x2="744.798" y2="183.981" stroke="gray" stroke-width="10"/>
          <line x1="1011.67" y1="258.899" x2="1030.82" y2="253.124" stroke="gray" stroke-width="3"/>
          <line x1="1018.98" y1="246.692" x2="1024.75" y2="265.84" stroke="gray" stroke-width="3"/>
          <line x1="266.111" y1="825.884" x2="304.234" y2="837.994" stroke="gray" stroke-width="3"/>
          <line x1="291.243" y1="813.078" x2="279.132" y2="851.2" stroke="gray" stroke-width="3"/>
          <line x1="980.547" y1="853.84" x2="999.695" y2="848.065" stroke="gray" stroke-width="3"/>
          <line x1="987.853" y1="841.633" x2="993.628" y2="860.781" stroke="gray" stroke-width="3"/>
        </svg>
        </div>
        <div className='imgbox'>
          <svg width="546" height="578" viewBox="0 0 546 578" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M389 383.5C389 490.919 301.919 578 194.5 578C87.0806 578 0 490.919 0 383.5C0 276.081 87.0806 189 194.5 189C301.919 189 389 276.081 389 383.5Z" fill="#5D97DA"/>
            <rect x="70" y="39" width="476" height="476" rx="238" fill="white"/>
            <path d="M516 75C516 116.421 482.421 150 441 150C399.579 150 366 116.421 366 75C366 33.5786 399.579 0 441 0C482.421 0 516 33.5786 516 75Z" fill="#5D97DA"/>
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