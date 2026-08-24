import jsonform from "../../assets/json/jsonform.json";
import { useState } from "react";
export default function JsonBasicForm(){
    const [formData,setFormData] = useState(jsonform)
    return(
        <>
        <h1>Employee Registration</h1>
        <form>
            {
            formData.map((value,index)=>{
                return(
                    <div key={index}>

                        {(value.FieldType =="text")&& (<>
                            <label htmlFor={value.FieldName}>{value.FieldLabel}</label>
                            <input type={value.FieldType} name={value.FieldName} id={value.FieldId} />
                            </>
                        )
                        }
                        {
                            (value.FieldType=="email")&&(
                                <>
                                    <label htmlFor={value.FieldName}>{value.FieldLabel}</label>
                                    <input type={value.FieldType} name={value.FieldName} id={value.FieldId} />
                                </>
                            )
                        }
                        {
                            (value.FieldType=="tel")&&(
                                <>
                                    <label htmlFor={value.FieldName}>{value.FieldLabel}</label>
                                    <input type={value.FieldType} name={value.FieldName} id={value.FieldId} />
                                </>
                            )
                        }
                        {
                            (value.FieldType=="select")&&(
                                <>
                                    <label htmlFor={value.FieldName}>{value.FieldLabel}</label>
                                    <select name={value.FieldName} id={value.FieldId}>
                                        <option></option>
                                    </select>
                                </>
                            )
                        }
                    </div>
                )
            })
        }
        </form>
        </>
    )
}