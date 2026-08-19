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
                    studentName = {studentDetails.studentName}
                    studentRole ={studentDetails.studentRole}
                    studentMail ={studentDetails.studentMail}
                    studentPhone ={studentDetails.studentPhone}
                    studentBio = {studentDetails.studentBio}
                    studentSkills = {studentDetails.studentSkills}
                    academicYear = {studentDetails.academicYear}
                />

            </div>
        </>
    )
}