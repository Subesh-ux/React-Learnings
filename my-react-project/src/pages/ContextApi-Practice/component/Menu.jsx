import { useContext } from "react"
import {MyFoodsContext} from '../../../globalComponent/practicecontext'

export default function MenuItems(){
    const {foods,addtocart} = useContext(MyFoodsContext)
    
    
    return(
        <>
            <div className="container">
                <div><h3 className="text-center">MENU</h3></div>
                <div className="row">
                {foods.map((value,index)=>{
                    return(
                        <div className="card col-2 bg-light " key={index}>
                        <div className="card-body text-center">
                            <div className="card-title">{value.name}</div>
                            <div className="card-text">{value.cuisine}</div>
                            <button className="btn btn-success" onClick={addtocart}>ADD TO CART</button>
                        </div>
                    </div>
                    )    
                }
                )}
                </div>
            </div>
        
        
        
        </>
    )
}