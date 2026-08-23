export default function Billing({ foods, totalQuantity, totalPrice, addItems, removeItems,placed,reset ,order}) {
    
    
    return (
        <>
            <table>
                <tr>
                    <th colSpan={4}>Cart</th>
                </tr>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
                {

                    foods.map((food) => {
                        if (food.Quantity > 0) {
                            return (

                                <tr key={food.id}>
                                    <td>{food.name}</td>
                                    <td><button onClick={() => addItems(food.id)}>+</button>
                                        {food.Quantity}
                                        <button onClick={() => removeItems(food.id)}>-</button>
                                    </td>
                                    <td>{food.price}</td>
                                    <td>{(food.Quantity * food.price).toFixed(2)}</td>
                                </tr>
                            )
                        }

                    })

                }
                <tr>
                    <th colSpan={3}>Sub Total </th>
                    <td >{totalPrice}</td>
                </tr>
                <tr>
                    <th colSpan={3}>GST (5%)</th>
                    <td >{(totalPrice * (5 / 100)).toFixed(2)}</td>
                </tr>
                <tr>
                    <th colSpan={3}>Grand Total</th>
                    <td >{(totalPrice + (totalPrice * (5 / 100))).toFixed(2)}</td>
                </tr>
                <tr>
                    <td ><button onClick={reset}>Clear Cart</button></td>
                    <td colSpan={2}></td>
                    <td><button onClick={placed}>Place Order</button></td>
                </tr>
            </table>
            
            

        </>
    )
}