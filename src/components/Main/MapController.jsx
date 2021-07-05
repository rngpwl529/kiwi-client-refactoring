import React from "react"
const MapController = () => {

    return (
        <div id='control-box'>
            <span>
                <ion-icon name="arrow-undo" onClick={()=>{alert('front')}}></ion-icon>
            </span>
            <div className='splitter'></div>
            <span>
                <ion-icon name="home" onClick={()=>{alert('root')}}></ion-icon>
            </span>
            <div className='splitter'></div>
            <span>
                <ion-icon name="arrow-redo" onClick={()=>{alert('back')}}></ion-icon>
            </span>
        </div>
    )
}

export default MapController