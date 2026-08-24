import { useState } from "react";
export default function Basicform(){
    const [fieldData,setFieldData] =useState({})

    const handleChange=(event)=>{
        const fieldName = event.target.name
        const fieldValue = event.target.value

        setFieldData({
            ...fieldData,
            [fieldName] : fieldValue
        })
    }


    const handleSubmit =(event)=>{
        event.preventDefault()
        console.log(fieldData)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" id="userName" onChange={handleChange}/>

            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" onChange={handleChange} />
            
            <button type="submit">Submit</button>
        </form>
        
        </>
    )
}