const MapController = ()=>{

    return (
        <div>
            <span>
                <img alt="back" onClick={()=>{alert('back')}}/>
            </span>
            <span>
                <img alt="front" onClick={()=>{alert('front')}}/>
            </span>
            <span>
                <img alt="root" onClick={()=>{alert('root')}}/>
            </span>
            <span>
                <img alt="delete" onClick={()=>{alert('delete')}}/>
            </span>
        </div>
    )
}
  
export default MapController