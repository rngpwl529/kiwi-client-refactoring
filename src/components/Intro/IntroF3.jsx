import IntroSearchBar from './IntroSearchBar'

const IntroF3 = () =>{
  return(
    <div className='container' id='introF3-container'>
      <div className='box'>
        <div  className='content'>
          <section className='main-container text'>
            <div className='title'><div class='back-number'>04</div>Search it</div>
            <div className='descript'>To find the keyword you have in mind. </div>
            <div className='sub-descript'>Look for keywords that you know. <br/>
              It'll send you to the location you're looking for. <br/>
              Continue your long journey there again. <br/>
              It's a trip without a destination, but it'll help you stay on your way.
            </div>
          </section>
        </div>
        <IntroSearchBar />
      </div>
    </div>
  )
}

export default IntroF3