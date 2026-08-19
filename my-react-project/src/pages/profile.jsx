import Skills from "./skills";

export default function Profile(
    {studentName, studentRole, studentMail, studentPhone, studentBio, academicYear , studentSkills}
) {

    return (
        <>
            {/* <style>
                {`
                            h1{
                                text-align : center; 
                            }
                            table {
                                border-collapse: collapse;
                                width: 1000px;
                                margin: 150px auto ;
                                text-align : center;
                                align-items : center;
                                border: 1px solid #ccc;
                            }

                            th {
                                background-color: black;
                                color: white;
                                padding: 12px;
                                
                            }

                            td {
                                
                                padding: 10px;
                            }

                            tr:nth-child(even) {
                                background-color: #f5f5f5;
                            }

                            button {
                                padding: 5px 12px;
                                margin: 2px;
                                cursor: pointer;
                                border-radius : 5px;
                                background-color: #3dc792;
                            }

                            button:hover {
                                background-color: #17aa72;
                            }
                        `}
            </style> */}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                    <tr>
                        <th>Role</th>
                    </tr>
                    <tr>
                        <th>Email</th>
                    </tr>
                    <tr>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{studentName}</td>
                    </tr>
                    <tr>
                        <td>{studentRole}</td>
                    </tr>
                    <tr>
                        <td>{studentMail}</td>
                    </tr>
                    <tr>
                        <td>{studentPhone}</td>
                    </tr>

                </tbody>
            </table>
            <hr />
            <h2>About Me</h2>
            <hr />
            <div>
                <p>{studentBio}</p>
            </div>


            <Skills  
                studentSkills = {studentSkills}
            />
        </>
    )
}