import React from "react"
const Keyword = ({ keywords }) => {

    return (
        <div>
            <ul>
                {keywords.forEach((keyword) => {
                    <li>{keyword}</li>
                })}
            </ul>
        </div>
    )
}
  
export default Keyword
