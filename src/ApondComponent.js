import React from "react"

const ApondComponent = ({apodData})=>{
    
    return (
        <div className="Apond">
            <h1>{apodData.title}</h1>
            <h2>{apodData.date}</h2>
            <img src={apodData.url}/>
            <p>{apodData.explanation}</p>
        </div>
    )
}

export default ApondComponent;