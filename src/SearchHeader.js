import React from "react"
import { useState } from "react";

function TextInput({input}) {

    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (event)=>{
        event.preventDefault()
        input(inputValue)
     
    }
    
    const handleChange = (event)=>{
        
        setInputValue(event.target.value)
   
    }



    return ( <div>
        <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange}></input>
        </form>
    </div> );
}

export default TextInput;