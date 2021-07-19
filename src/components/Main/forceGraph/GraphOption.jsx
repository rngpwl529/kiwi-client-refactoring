import React from 'react'

const GraphOption = ()=>{
    const openHandler = ()=>{
        document.querySelector('#graphOption').classList.add('open')
    }

    const closeHandler = ()=>{
        document.querySelector('#graphOption').classList.remove('open')
    }
    return(
        <div id="graphOption">
            <ion-icon name="grid-outline" onClick={openHandler}></ion-icon>
            <div className="open__option">
                <ion-icon name="close-outline" onClick={closeHandler}></ion-icon>
                <div className='graphOption__header'>Graph Option</div>
                <div className="splitter"></div>
                <div id="distance__option">
                    <div className='option__header'>Distance</div>
                    <input type='range' min='0' max='200' step='1'
                    defaultValue='70' id='distance'></input>
                </div>
                <div id="strength__option">
                    <div className='option__header'>Strength</div>
                    <input type='range' min='500' max='1000' step='100'
                    id='strength' defaultValue='2000'></input>
                </div>
            </div>
        </div>
    )
}

export default GraphOption