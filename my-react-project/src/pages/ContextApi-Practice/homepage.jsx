import {MyFoodsContext} from '../../globalComponent/practicecontext'
import MenuItems from './component/Menu'
import CartItems from './component/cart'
import { useState } from 'react'
import foodlist from '../../assets/json/foodList.json'

export default function HomePage(){
    const [foods,setFoods]=useState(foodlist)
    const [totalQty,setTotalQty] = useState(0)
    const addToCart=()=>{
       setTotalQty(totalQty+1) 
    }
    return(
        <>
        
            <div className='text-center'>
                <h1>Foods</h1>
            </div>
            <hr />
            <MyFoodsContext.Provider value={{foods : foods,
                addtocart :addToCart,
                total : totalQty
            }}>
                <MenuItems/>
                <CartItems/>
            </MyFoodsContext.Provider>
        
        
        </>
    )
}