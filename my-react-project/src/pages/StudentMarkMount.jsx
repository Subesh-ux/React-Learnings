import { Component } from "react";

export default class StudentMarkMount extends Component{
    constructor(){
        super()
        this.state = {
            "studentName" : "Subesh",
            "studentMail" : "subeshsubi7305@gmail.com",
            "studentPhone" : "7603820151",
            "studentMark" : 50,
            "result" : "Not Evaluated"
        }
        
    }
     addMarks=()=>{
            const addedMarks = this.state.studentMark + 5
            if (addedMarks >100){
                this.setState({
                    ...this.state,
                    studentMark : 100
                })
            }
            else{
                this.setState({
                    ...this.state,
                    studentMark : addedMarks
                })
            }
        }
    render(){
        return(
            <>
                <div>
                    <h1>Student Details</h1>
                    <table>
                        <tr>
                            <td>Student Name </td>
                            <td>{this.state.studentName}</td>
                        </tr>

                        <tr>
                            <td>Student Mail</td>
                            <td>{this.state.studentMail}</td>
                        </tr>

                        <tr>
                            <td>Student Phone</td>
                            <td>{this.state.studentPhone}</td>
                        </tr>

                        <tr>
                            <td>Student Mark</td>
                            <td>{this.state.studentMark}</td>
                            <td><button onClick={this.addMarks}>Add Marks</button></td>
                        </tr>
            
                        <tr>
                            <td>Result</td>                            
                            <td>{this.state.result}</td>
                        </tr>
                    </table>
                </div>
            
            </>
        )
    }
    componentDidMount(){
        fetch("https://fakestoreapi.com/users/1")
        .then(response => response.json())
        .then(data =>{
            this.setState(
                {
                    studentName : data.username,
                    studentMail : data.email,
                    studentPhone : data.phone,
                }
            )
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.studentMark !== this.state.studentMark){
            if(prevState.studentMark<this.state.studentMark && prevState.studentMark<60){
                this.setState({result: "pass"})
            }
            else if (prevState.studentMark>=60 && prevState.studentMark<=100){
                this.setState({result:"First Class"})
            }
            else{
                this.setState({result : "Fail"})
            }
        }

    }




}