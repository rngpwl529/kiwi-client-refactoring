const MainDescription = () =>{
  return(
    <div className='container' id='maindescription-container'>
      <div  className='box'>
        <img className='logo' src='images/bitmap.png' alt='KiWi logo'/>
        <div className='content'>
          <section className='main-container text'>
            
            <div className='title'>
              <div className='back-number'>01</div>
              Experience
            </div>
            <div className='descript'>A new journey to mind map</div>
            <div className='sub-descript'>Bringing everyone's thoughts together creates new ideas.<br/>
            kiwi services create connections to ideas <br />
            and thoughts of many people.<br />
            It can be a roadmap for finding information. <br />
            It becomes a new milestone for accessing new information.
            </div>
            <button id='goBtn'>LET'S GO</button>
          </section>
          <div className='main-imgbox imgbox'>
            <div className='circle 1'></div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default MainDescription