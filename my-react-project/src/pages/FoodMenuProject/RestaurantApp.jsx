import { useState } from "react";
import FoodList from "../../assets/json/foodList.json";
import Menu from "./Menu";

export default function RestaurantApp() {
    const orderId=Math.floor(Math.random()*1000000)
    const [foods, setFoods] = useState(
        FoodList.map(food => ({
            ...food,
            Quantity: 0,

        }))
    )
    const [selectedCategory, setSelectedCategory] = useState(["All"])
    const [selectedType, setSelectedType] = useState(["All"])
    const [order,setOrder]=useState(false)








    const totalQuantity = foods.reduce((acc, foods) => {
        return acc + foods.Quantity
    }, 0)
    const totalPrice = foods.reduce((acc, foods) => {
        return acc + (foods.price * foods.Quantity)
    }, 0)
    const addItems = (id) => {
        setFoods(
            foods.map(foods => {
                if (foods.id === id) {
                    return {
                        ...foods,
                        Quantity: foods.Quantity + 1
                    }
                }
                return foods
            })
        )
    }
    const removeItems = (id) => {
        setFoods(
            foods.map(foods => {
                if (foods.id == id) {
                    if (foods.Quantity > 0) {
                        return {
                            ...foods,
                            Quantity: foods.Quantity - 1
                        }
                    }
                    return foods
                }
                return foods
            }
            )
        )
    }







    const checked = (event) => {
        let checkedData = selectedCategory.includes(event)
        return checkedData
    }


    const Events = (event) => {
        const category = event.target.id
        const status = event.target.checked

        if (status == true && category == "All") {
            setSelectedCategory([
                "All"
            ])
        }
        else if (status == true && category !== "All") {
            setSelectedCategory([
                ...selectedCategory.filter(item => item !== "All"),
                category
            ])
        }
        else if (status == false) {
            const newCategory = selectedCategory.filter(selectedCategory => category != selectedCategory)

            if (newCategory.length == 0) {
                setSelectedCategory(["All"])
            }
            else {
                setSelectedCategory(newCategory)
            }
        }


    }
    let filteredFoodList;

    if (selectedCategory.includes("All")) {
        filteredFoodList = foods
    }
    else {
        filteredFoodList = foods.filter(value => selectedCategory.includes(value.cuisine))
    }

    const foodType = (event) => {
        const type = event.target.value
        setSelectedType([
            selectedType, type
        ])



    }
    let newFilterdFoodList
    if (selectedType.includes("All")) {
        newFilterdFoodList = filteredFoodList
    }
    else {
        newFilterdFoodList = filteredFoodList.filter(value => selectedType.includes(value.type))
    }
    const placed = () => {
        if (totalQuantity == 0) {
            alert("No Items In Cart.")
        }
        else {
            setOrder(true)
            setFoods(
                foods.map(food => ({
                    ...food,
                    Quantity: 0
                }))
            )
        }
    }
    const reset = () => {
        setFoods(
            foods.map(food => ({
                ...food,
                Quantity: 0
            }))
        )
    }



    return (
        <>
            <div>
                <style>
                    {`
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f6f8;
        }

        h1 {
            text-align: center;
            margin: 25px 0 5px;
            font-size: 36px;
        }

        h2 {
            text-align: center;
            margin-top: 35px;
        }

        p {
            text-align: center;
            color: #666;
            font-size: 16px;
        }

        hr {
            border: none;
            border-top: 1px solid #ddd;
            margin: 15px 0;
        }

        table {
            border-collapse: collapse;
            width: 90%;
            max-width: 1100px;
            margin: 25px auto;
            background-color: white;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
            border-radius: 10px;
            overflow: hidden;
        }

        th {
            background-color: #222;
            color: white;
            padding: 14px;
            font-size: 15px;
        }

        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }

        tr:hover {
            background-color: #f8f8f8;
        }

        input[type="checkbox"] {
            width: 16px;
            height: 16px;
            cursor: pointer;
            margin-right: 6px;
        }

        label {
            cursor: pointer;
            margin-right: 15px;
            font-weight: 500;
        }

        select {
            padding: 8px 15px;
            border: 1px solid #ccc;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            outline: none;
        }

        select:focus {
            border-color: #3dc792;
        }

        button {
            padding: 7px 13px;
            margin: 3px;
            cursor: pointer;
            border: none;
            border-radius: 6px;
            background-color: #3dc792;
            color: white;
            font-weight: bold;
            transition: 0.2s;
        }

        button:hover {
            background-color: #17aa72;
            transform: scale(1.05);
        }

        button:active {
            transform: scale(0.95);
        }

        /* Quantity buttons */
        td button {
            min-width: 32px;
        }

        /* Billing section */
        table:last-child {
            margin-bottom: 50px;
        }

        /* Place order button */
        button[onClick] {
            font-size: 14px;
        }
    `}
                </style>
                <hr />
                <h1>Foodie App</h1>
                <p>Get What You Need With Us!!</p>
                <hr />
            </div>
            <div>

            </div>
            <div>
                {order ?(<div>
                <table>
                    <tr>
                        <th colSpan={2}>Order Placed Successfully</th>
                    </tr>
                    <tr>
                        <td>Order Id</td>
                        <td>{orderId}</td>
                    </tr>
                    <tr>
                        <td>Total Items</td>
                        <td>{totalQuantity}</td>
                    </tr>
                    <tr>
                        <td>Amount</td>
                        <td>{(totalPrice + (totalPrice * (5 / 100))).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th colSpan={2}><pre>Thank You For Ordering!
                            Your Food is being Prepared!!</pre></th>
                    </tr>
                </table>
            </div> ):(
                <Menu
                    foods={newFilterdFoodList}
                    addItems={addItems}
                    removeItems={removeItems}
                    totalQuantity={totalQuantity}
                    totalPrice={totalPrice}
                    placed={placed}
                    reset={reset}
                    Events={Events}
                    checked={checked}
                    foodType={foodType}
                    order={order}
                    
                />)}

            </div>



        </>
    )
}