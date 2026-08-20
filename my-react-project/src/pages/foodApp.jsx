import { useState } from "react"
import FoodList from "./foodList"
import OrderSummary from "./orderSummary"
export default function FoodApp() {
    const [foods, setFoods] = useState([
        {
            id: 1,
            name: "Pizza",
            price: 250,
            quantity: 0
        },
        {
            id: 2,
            name: "Burger",
            price: 150,
            quantity: 0
        },
        {
            id: 3,
            name: "Biryani",
            price: 200,
            quantity: 0
        }
    ])
    const toAddFood = (id) => {
        setFoods(
            foods.map((food) => {
                if (food.id == id) {
                    // let newQuantity = foods.quantity + 1
                    return {
                        ...food,
                        quantity: food.quantity + 1
                    }
                }
                return food
            }
            )

        )
    }
    const toRemoveFood = (id) => {
        setFoods(
            foods.map((food) => {
                if (food.id == id) {
                    let newQuantity = food.quantity - 1
                    if (newQuantity >= 0) {
                        return {
                            ...food,
                            quantity: newQuantity
                        }
                    }
                }
                return food
            }

            )
        )
    }
    const finalPrice = foods.reduce((acc, food) => {
        return acc + (food.quantity * food.price)
    }, 0)



    const totalQuantity = foods.reduce((acc, food) => {
        return acc + food.quantity
    }, 0)

    const clear = () => {
        setFoods(
            foods.map((food) => {
                return {
                    ...food,
                    quantity: 0
                }

            })
        )
    }




    return (
        <>
            <h1>Food App</h1>
            <div>
                <style>
                    {`
        h1 {
    text-align: center;
    margin-bottom: 30px;
    font-family: Arial, sans-serif;
}

table {
    border-collapse: collapse;
    width: 750px;
    margin: 20px auto;
    text-align: center;
    border: 1px solid #ddd;
    font-family: Arial, sans-serif;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

th {
    background-color: #222;
    color: white;
    padding: 14px;
    font-size: 15px;
}

td {
    padding: 13px;
    border-bottom: 1px solid #ddd;
}

tr:nth-child(even) {
    background-color: #f8f8f8;
}

tr:hover {
    background-color: #eeeeee;
}

button {
    padding: 7px 16px;
    margin: 3px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #3dc792;
    color: white;
    font-weight: bold;
}

button:hover {
    background-color: #17aa72;
}

button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

h3 {
    text-align: center;
    font-family: Arial, sans-serif;
    margin-top: 25px;
    margin-bottom: 10px;
}

hr {
    width: 750px;
    border: none;
    border-top: 1px solid #ddd;
}

table:last-of-type {
    margin-top: 15px;
}
    `}
                </style>
                <table>
                    <tr>
                        <th>Food</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                        <th></th>
                    </tr>
                    < FoodList
                        foods={foods}
                        toAddFood={toAddFood}
                        toRemoveFood={toRemoveFood}

                    />


                </table>
                <br /><br /><br />
                <hr />
                <h3>Order Summary</h3>
                <hr />
                <table>
                    <tr>
                        <th>Total items</th>
                        <th>Amount</th>
                    </tr>
                    < OrderSummary
                        totalQuantity={totalQuantity}
                        finalPrice={finalPrice}
                        clear={clear}
                    />
                </table>
            </div>

        </>
    )
}