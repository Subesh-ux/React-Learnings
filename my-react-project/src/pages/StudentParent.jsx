import { Component } from "react";
import StudentMarkMount from "./StudentMarkMount";
export default class StudentParent extends Component{
    constructor(){
        super()
        this.state= {
            "studentShow"  : true

        }
        
    }
    btnclick=()=>{
        this.setState({
            studentShow : !this.state.studentShow
        })
    }
    render(){
        return(
            <>
            <button onClick={this.btnclick}>Show/Hide Details</button>
                <div>
                    {this.state.studentShow && <StudentMarkMount />}
                </div>            
            </>
        )
    }
}