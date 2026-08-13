export default function StudentDetails(){
    const StudentName = "Subesh M"
    const StudentId = 950022106044
    const Department = "ECE"
    const CourseFee = 30000.2643
    const Discount = 13
    const maleStudents = 28
    const femaleStudents = 32
    const collegeState ="Tamil Nadu"
    const discountAmount = (CourseFee * (Discount/100)).toFixed(2)
    const totalFees = (CourseFee - discountAmount).toFixed(2)
    const totalStudents = (maleStudents + femaleStudents) 
    return(
        <div>
            <h1>Student Details</h1>
            <p>Student Name : {StudentName.toUpperCase()}</p>
            <p>Student ID : {StudentId}</p>
            <p>Depatment : {Department}</p>
            <p>Course Fees : {CourseFee}</p>
            <p>Discount Amount : {discountAmount}</p>
            <p>Final Fees Amount : {totalFees}</p>
            <p>College State : {collegeState}</p>
            <p>Total Strenght of College : {totalStudents}</p>
        </div>
    )

}