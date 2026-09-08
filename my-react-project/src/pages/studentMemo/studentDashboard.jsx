import { useCallback, useMemo, useState } from "react"
import studentList from "../../assets/json/studentlist.json"
import StudentDetails from "./studentDetails"
export default function StudentDashboard() {
    const [students, setStudents] = useState(studentList)
    const [count, setCount] = useState(0)
    const avg = students.reduce((acc, value) => {
        return acc + value.marks
    }, 0) / count
    useMemo(()=>{
        for(let i=0;i<1000000000;i++){
        if(i==1){
            console.log("Calculation is loading....")
        }
    }
    },[])

   const add = useCallback(() => {
    setCount(prevCount => prevCount + 1);
}, []);
    



    return (
        <>
            <br />
            <div className="d-flex align-items-center  gap-3 mb-4">
                <span className="fw-bold fs-5 ">
                    Current Count: <span className="text-primary">{count}</span>
                </span>
                
                <button
                    className="btn btn-warning rounded-pill px-4 py-2 fw-semibold shadow-sm"
                    onClick={() => setCount(count + 1)}
                >
                    + Add
                </button>
                <span className="fw-bold fs-5 ">
                    Average Marks: <span className="text-primary">{avg}</span>
                </span>

            </div>
            <StudentDetails
                students={students}
                add= {add}
            />
        </>
    )
}