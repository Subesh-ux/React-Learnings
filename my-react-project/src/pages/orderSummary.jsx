export default function OrderSummary({totalQuantity,finalPrice,clear}){
    if(totalQuantity==0){
        return(
        <>
            <tr>
                <td colSpan={2}>Cart is Empty</td>
            </tr>
        
        </>
    )

    }
    else{
        return(
        <>
            <tr>
                <td>{totalQuantity}</td>
                <td>{finalPrice}</td>
            </tr>
            <tr>
                <td colSpan={2}><button onClick={clear}>Clear Cart</button></td>
            </tr>
        
        </>
    )
    }

    
}