import jsonform from "../../assets/json/jsonform.json";
import { useState } from "react";
export default function JsonBasicForm() {
    const [formData, setFormData] = useState(jsonform)
    const [employeeDetails,setEmployeeDetails] = useState({

    })

    const handleChange=(event)=>{
        const name = event.target.name
        const value = event.target.value

        setEmployeeDetails({
            ...employeeDetails,
            [name] : value
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(employeeDetails)
    }

    return (
        <>
            <h1>Employee Registration</h1>
            <form onSubmit={handleSubmit}>
                {
                    formData.map((value, index) => {
                        return (
                            <div key={index}>

                                {(value.FieldType == "text") && (<>
                                    <label htmlFor={value.FieldName}>{value.FieldLabel}</label>
                                    <input type={value.FieldType} name={value.FieldName} id={value.FieldId} onChange={handleChange} />
                                </>
                                )
                                }
                                {
                                    (value.FieldType == "email") && (
                                        <>
                                            <label htmlFor={value.FieldName}>{value.FieldLabel}</label>
                                            <input type={value.FieldType} name={value.FieldName} id={value.FieldId} onChange={handleChange}/>
                                        </>
                                    )
                                }
                                {
                                    (value.FieldType == "tel") && (
                                        <>
                                            <label htmlFor={value.FieldName}>{value.FieldLabel}</label>
                                            <input type={value.FieldType} name={value.FieldName} id={value.FieldId} onChange={handleChange}/>
                                        </>
                                    )
                                }
                                {
                                    (value.FieldType == "select") && (
                                        <>
                                            <label htmlFor={value.FieldName}>{value.FieldLabel}</label>
                                            <select name={value.FieldName} id={value.FieldId} onChange={handleChange} defaultValue="Developer">
                                                {
                                                    value.FieldOption.map((value, index) => {
                                                        return <option value={value} key={index} >{value}</option>
                                                    })
                                                }
                                            </select>
                                        </>
                                    )
                                }

                                {(value.FieldType == "date") && (
                                    <>
                                        <label htmlFor={value.FieldName}>{value.FieldLabel}</label>
                                        <input type={value.FieldType} name={value.FieldName} id={value.FieldId} onChange={handleChange}/>
                                    </>
                                )

                                }
                                {value.FieldType == "radio" && (
                                    <>
                                        <label>{value.FieldLabel}</label>

                                        {value.FieldOption.map((data, index) => {
                                            return (
                                                <>
                                                    <input
                                                        type="radio"
                                                        value={data}
                                                        name={value.FieldName}
                                                        id={data}
                                                        key={index}
                                                        onChange={handleChange}
                                                    />

                                                    <label htmlFor={data}>
                                                        {data}
                                                    </label>
                                                </>
                                            )
                                        })}
                                    </>
                                )}
                                {
                                    (value.FieldType == "textarea") && (
                                        <>
                                            <label htmlFor={value.FieldName}>{value.FieldLabel}</label>
                                            <textarea name={value.FieldName} id={value.FieldId} rows={value.FieldRow} cols={value.FieldCol} onChange={handleChange}></textarea>
                                        </>
                                    )
                                }
                                {
                                    (value.FieldType == "checkbox") && (
                                        <>
                                            <label htmlFor={value.FieldName}></label>
                                            {value.FieldOption.map((data, index) => {
                                                return (
                                                    <>
                                                        <input type={value.FieldType} name={data} id={data} key={index} onChange={handleChange} value={data }/>
                                                        <label htmlFor={data}>{data}</label>
                                                    </>
                                                )
                                            })}
                                        </>
                                    )
                                }
                                
                            </div>
                        )
                    })
                }
                <button type="submit">submit</button>
            </form>
        </>
    )
}