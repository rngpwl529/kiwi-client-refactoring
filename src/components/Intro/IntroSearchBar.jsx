
const IntroSearchBar = ()=>{
  return(
    <div id='intro-search-container'>
      <div className='input-box'>
        <input type='text' className='input search' placeholder='Find Your Keyword in Your mind.'/>
        <img src='images/search.png' alt='search Icon' className='search-icon'/>
      </div>
    </div>
  )
}

export default IntroSearchBar