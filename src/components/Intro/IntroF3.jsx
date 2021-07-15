import React from "react"

const IntroF3 = () =>{
  return(
    <div className='container' id='introF3-container'>
      <div className='box'>
        <div  className='content'>
          <div className='back-image'>
            <svg width="1441" height="1024" viewBox="0 0 1441 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1013.86" y1="164.478" x2="1035.36" y2="130.743" stroke="gray" strokeWidth="10"/>
              <line x1="1007.77" y1="136.83" x2="1041.51" y2="158.324" stroke="gray" strokeWidth="10"/>
              <line x1="110.111" y1="760.884" x2="148.234" y2="772.994" stroke="gray" strokeWidth="3"/>
              <line x1="135.243" y1="748.078" x2="123.132" y2="786.2" stroke="gray" strokeWidth="3"/>
              <line x1="585.672" y1="75.8991" x2="604.82" y2="70.124" stroke="gray" strokeWidth="3"/>
              <line x1="592.977" y1="63.6916" x2="598.752" y2="82.8397" stroke="gray" strokeWidth="3"/>
            </svg>
          </div>
          <div className='imgbox'>
            <svg width="662" height="622" viewBox="0 0 662 622" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M662 472C662 554.843 594.843 622 512 622C429.157 622 362 554.843 362 472C362 389.157 429.157 322 512 322C594.843 322 662 389.157 662 472Z" fill="#5D97DA" className='move'/>
              <path d="M200 411C200 466.228 155.228 511 100 511C44.7715 511 0 466.228 0 411C0 355.772 44.7715 311 100 311C155.228 311 200 355.772 200 411Z" fill="#5D97DA" className='move'/>
              <circle cx="297" cy="250" r="250" fill="#9EBFE7"/>
            </svg>
          </div>
          <section className='main-container text'>
            <div className='title'><div className='back-number'>04</div>Search it</div>
            <div className='descript'>To find the keyword you have in mind. </div>
            <div className='sub-descript'>Look for keywords that you know. <br/>
              It&apos;ll send you to the location you&apos;re looking for. <br/>
              Continue your long journey there again. <br/>
              It&apos;s a trip without a destination, but it&apos;ll help you stay on your way.
            </div>
          </section>
        </div>
        <div id='intro-search-container'>
          <div className='input-box'>
            <input type='text' className='input search' placeholder='Find Your Keyword in Your mind.'/>
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default IntroF3