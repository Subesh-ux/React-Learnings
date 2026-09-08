import { memo } from "react";
export default memo( function StudentDetails({ students,add }) {
    let expensiveResult = 0;

    for (let i = 0; i < 50000000; i++) {
        expensiveResult += i;
    }

    console.log("StudentDetails rendered");
    console.log("Expensive calculation completed:", expensiveResult);
    console.log("StudentDetails finished loading");

    return (
        <>
            <div className="container py-5">
                <button className="btn btn-warning" onClick={add}>Child Add</button>
                <div
                    className="card shadow-lg border-0 rounded-4 overflow-hidden"
                    style={{ width: "700px", margin: "0 auto" }}
                >
                    <div className="card-header bg-primary text-white p-3">
                        <h4 className="mb-0">Student Performance</h4>
                    </div>

                    <table className="table table-hover mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Student Name</th>
                                <th>Marks</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                students.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="fw-semibold">{value.name}</td>
                                            <td>{value.marks}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>



        </>
    )
}
)