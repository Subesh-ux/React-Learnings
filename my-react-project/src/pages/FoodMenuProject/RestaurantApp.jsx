import { useState } from "react";
import FoodList from "../../assets/json/foodList.json";
import Menu from "./Menu";
export default function RestaurantApp() {
    const [foods, setFoods] = useState(FoodList)
    const [selectedCategory,setSelectedCategory]=useState([]) 
    
    const Events=(event)=>{
        const category = event.target.id
        setSelectedCategory([
            selectedCategory,category
        ])
        console.log(selectedCategory)
    }

    


    return (
        <>
            <div>
                <style>
                    {`
                            h1{
                                text-align : center; 
                            }
                            table {
                                border-collapse: collapse;
                                width: 1000px;
                                margin: 150px auto ;
                                text-align : center;
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
                                border-radius : 5px;
                                background-color: #3dc792;
                            }

                            button:hover {
                                background-color: #17aa72;
                            }
                        `}
                </style>
                <hr />
                <h1>Foodie App</h1>
                <p>Get What You Need With Us!!</p>
                <hr />
            </div>
            <div>
                <table>
                    <tr><th>Filters</th>

                        <td><input type="checkbox" name="All" id="All"  onClick={Events}/>
                            <label htmlFor="All">All</label>
                        </td>
                        <td><input type="checkbox" name="SouthIndian" id="SouthIndian" onClick={Events}/>
                            <label htmlFor="SouthIndian">SouthIndian</label>

                        </td>
                        <td><input type="checkbox" name="NorthIndian" id="NorthIndian"onClick={Events} />
                            <label htmlFor="NorthIndian">NorthIndian</label>
                        </td>
                        <td><input type="checkbox" name="Chinese" id="Chinese" onClick={Events}/>
                            <label htmlFor="Chinese">Chinese</label>
                        </td>
                    </tr>

                </table>
            </div>
            <div>
                <Menu
                    foods={foods}
                />

            </div>



        </>
    )
}