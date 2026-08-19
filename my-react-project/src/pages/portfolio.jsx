import { useState } from "react"
import Profile from "./profile"
export default function Portfolio(){
    const[studentDetails,setStudentDetails] = useState({
        "studentName" : "Subesh",
        "studentRole" : "ECE Engineer",
        "studentMail" : "subeshsubi7305@gmail.com",
        "studentPhone" : "76038 20151",
        "studentBio" : "I am learning React and building projects to improve my skills.",
        "studentSkills" : ["Python","ReactJS","HTML","CSS"],
        "academicYear"  : "2026"
    })

    return(
        <>
            <div>
                <h1>My Portfolio</h1>
                < Profile 
                    studentName = {studentName}
                    studentRole ={studentRole}
                    studentMail ={studentMail}
                    studentPhone ={studentPhone}
                    studentBio = {studentBio}
                    studentSkills = {studentSkills}
                    academicYear = {academicYear}
                />

            </div>
        </>
    )
}