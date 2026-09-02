import { useContext } from "react"
import { MyFoodsContext } from "../../../globalComponent/practicecontext"
export default function CartItems(){
    const {addtocart,total} = useContext(MyFoodsContext)
    return(
        <>
            <h3>CART ITEMS </h3>

            <div>
                <h5>TOTAL ITEMS : {total}</h5>
                <div className="text-center">
                    <button className="btn btn-success" onClick={addtocart}>ADD</button>
                </div>
            </div>
        </>
    )
}