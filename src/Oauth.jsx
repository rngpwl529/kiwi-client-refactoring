import React from 'react'

const Oauth = ()=>{
    let code = new URL(window.location.href).searchParams.get('code')
    console.log(code)
    return(
        <div>{code}</div>
    )
}

export default Oauth