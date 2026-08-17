import { useState } from "react"
export default function RestaurantOrder() {
    const [customerName, setcustomerName] = useState("Subesh")
    const [priceList, setpriceList] = useState(
        {
            burgerPrice: 120,
            pizzaPrice: 200,
            frenchFriesPrice: 80,
            cokePrice: 50
        }
    )
    const [quantity, setquantity] = useState(
        {
            burgerQty: 0,
            pizzaQty: 0,
            friesQty: 0,
            cokeqty: 0
        }
    )
    const [itemTotal, setitemTotal] = useState(
        {
            finalBurgerPrice: 0,
            finalPizzaPrice: 0,
            finalFriesPrice: 0,
            finalCokePrice: 0
        }
    )

    const burgerQtyIncrease = () => {
        const newBurgerQty = quantity.burgerQty + 1
        setquantity({
            ...quantity, burgerQty: newBurgerQty
        })
        setitemTotal({
            ...itemTotal, finalBurgerPrice: priceList.burgerPrice * newBurgerQty
        })
    }
    const pizzaQtyIncrease = () => {
        const newPizzaQty = quantity.pizzaQty + 1
        setquantity({
            ...quantity, pizzaQty: newPizzaQty
        })
        setitemTotal({
            ...itemTotal, finalPizzaPrice: priceList.pizzaPrice * newPizzaQty
        })
    }
    const friesIncreaseQty = () => {
        const newFriesQty = quantity.friesQty + 1
        setquantity({
            ...quantity, friesQty: newFriesQty
        })
        setitemTotal({
            ...itemTotal, finalFriesPrice: priceList.frenchFriesPrice * newFriesQty
        })
    }
    const cokeIncreaseQty = () => {
        const newCokeQty = quantity.cokeqty + 1
        setquantity({
            ...quantity, cokeqty: newCokeQty
        })
        setitemTotal({
            ...itemTotal, finalCokePrice: priceList.cokePrice * newCokeQty
        })
    }


    const burgerQtyDecrease = () => {
        const newBurgerQty = quantity.burgerQty - 1
        if (newBurgerQty >= 0) {
            setquantity({
                ...quantity, burgerQty: newBurgerQty
            })
            setitemTotal({
                ...itemTotal, finalBurgerPrice: priceList.burgerPrice * newBurgerQty
            })
        }
        else {
            setquantity({
                ...quantity,
                burgerQty: 0
            })
            setitemTotal({
                ...itemTotal,
                finalBurgerPrice: 0
            })
        }
    }
    const pizzaQtyDecrease = () => {
        const newPizzaQty = quantity.pizzaQty - 1
        if (newPizzaQty >= 0) {
            setquantity({
                ...quantity, pizzaQty: newPizzaQty
            })
            setitemTotal({
                ...itemTotal, finalPizzaPrice: priceList.pizzaPrice * newPizzaQty
            })
        }
        else {
            setquantity({
                ...quantity,
                pizzaQty: 0
            })
            setitemTotal({
                ...itemTotal,
                finalPizzaPrice: 0
            })
        }
    }
    const friesDecreaseQty = () => {
        const newFriesQty = quantity.friesQty - 1
        if (newFriesQty >= 0) {
            setquantity({
                ...quantity, friesQty: newFriesQty
            })
            setitemTotal({
                ...itemTotal, finalFriesPrice: priceList.frenchFriesPrice * newFriesQty
            })
        }
        else {
            setquantity({
                ...quantity,
                friesQty: 0
            })
            setitemTotal({
                ...itemTotal,
                finalFriesPrice: 0
            })
        }
    }
    const cokeDecreaseQty = () => {
        const newCokeQty = quantity.cokeqty - 1
        if (newCokeQty >= 0) {
            setquantity({
                ...quantity, cokeqty: newCokeQty
            })
            setitemTotal({
                ...itemTotal, finalCokePrice: priceList.cokePrice * newCokeQty
            })
        }
        else {
            setquantity({
                ...quantity,
                cokeqty: 0
            })
            setitemTotal({
                ...itemTotal,
                finalCokePrice: 0
            })
        }
    }
    const totalQty = quantity.burgerQty + quantity.pizzaQty + quantity.friesQty + quantity.cokeqty
    const totalPrice = itemTotal.finalBurgerPrice + itemTotal.finalPizzaPrice + itemTotal.finalFriesPrice + itemTotal.finalCokePrice

    const reset = () => {
        setquantity({
            burgerQty: 0,
            pizzaQty: 0,
            friesQty: 0,
            cokeqty: 0
        })
        setitemTotal({
            finalBurgerPrice: 0,
            finalPizzaPrice: 0,
            finalFriesPrice: 0,
            finalCokePrice: 0
        })
        alert('Successfully Cleared')
    }
        const payment = () => {
        setquantity({
            burgerQty: 0,
            pizzaQty: 0,
            friesQty: 0,
            cokeqty: 0
        })
        setitemTotal({
            finalBurgerPrice: 0,
            finalPizzaPrice: 0,
            finalFriesPrice: 0,
            finalCokePrice: 0
        })
        alert(`Your order is placed successfully. Thank you ${customerName}`)
    }

    return (
        <>
            <h3>Menu</h3>
            <hr />
            <p>Welcome , Mr.{customerName}</p>
            <style>
    {`
        table {
            border-collapse: collapse;
            width: 700px;
            margin: 20px auto 0 auto;
            
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
        }

        button:hover {
            background-color: #ddd;
        }
    `}
</style>
            <table>
                <thead>
                    <th>Items</th>
                    <th>Price Per Item</th>
                    
                    <th>Quantity</th>
                    <th></th>
                    <th></th>
                    <th>Price</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Burger</td>
                        <td>{priceList.burgerPrice}</td>
                        <td>{quantity.burgerQty}</td>
                        <td><button onClick={burgerQtyIncrease}>+</button></td>
                        
                        <td><button onClick={burgerQtyDecrease}>-</button></td>
                        <td>{itemTotal.finalBurgerPrice}</td>
                    </tr>
                    <tr>
                        <td>Pizza</td>
                        <td>{priceList.pizzaPrice}</td>
                        <td>{quantity.pizzaQty}</td>
                        <td><button onClick={pizzaQtyIncrease}>+</button></td>
                        
                        <td><button onClick={pizzaQtyDecrease}>-</button></td>
                        <td>{itemTotal.finalPizzaPrice}</td>
                    </tr>
                    <tr>
                        <td>French Fries</td>
                        <td>{priceList.frenchFriesPrice}</td>
                        <td>{quantity.friesQty}</td>
                        <td><button onClick={friesIncreaseQty}>+</button></td>
                       
                        <td><button onClick={friesDecreaseQty}>-</button></td>
                        <td>{itemTotal.finalFriesPrice}</td>
                    </tr>
                    <tr>
                        <td>Coke</td>
                        <td>{priceList.cokePrice}</td>
                        <td>{quantity.cokeqty}</td>
                        <td><button onClick={cokeIncreaseQty}>+</button></td>
                        
                        <td><button onClick={cokeDecreaseQty}>-</button></td>
                        <td>{itemTotal.finalCokePrice}</td>
                    </tr>
                    
                    <tr>
                        <td colSpan={2}>Total Items</td>
                        <td colSpan={4}>{totalQty}</td>
                    </tr>
                    <tr>
                        <td colSpan={5}>Total Price</td>
                        <td>{totalPrice}</td>
                    </tr>
                    <tr>
                        <td colSpan={5}><button onClick={reset}>Clear My Order</button></td>
                        <td><button onClick={payment}>
                            Pay Now</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
