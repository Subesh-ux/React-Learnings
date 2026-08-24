import Billing from "./billing";
export default function Menu({ foods, addItems, removeItems, totalQuantity, totalPrice, placed, reset,Events,foodType,checked,order}) {
    
    return (
        <>
            <h2>Menu</h2>
            <hr />
            <table>
                <thead>
                    
                    <tr><th>Filters</th>

                        <td><input type="checkbox" name="All" id="All" onChange={Events} checked={checked("All")} />
                            <label htmlFor="All">All</label>
                        </td>
                        <td><input type="checkbox" name="SouthIndian" id="SouthIndian" onChange={Events} checked={checked("SouthIndian")} />
                            <label htmlFor="SouthIndian">SouthIndian</label>

                        </td>
                        <td><input type="checkbox" name="NorthIndian" id="NorthIndian" onChange={Events} checked={checked("NorthIndian")} />
                            <label htmlFor="NorthIndian">NorthIndian</label>
                        </td>
                        <td><input type="checkbox" name="Chinese" id="Chinese" onChange={Events} checked={checked("Chinese")} />
                            <label htmlFor="Chinese">Chinese</label>
                        </td>
                    </tr>
                    <tr>
                        <th>Type</th>
                        <td colSpan={4}>
                            <select name="foodType" id="foodType" onChange={foodType}>
                                <option value="All">All</option>
                                <option value="Veg">Veg</option>
                                <option value="Non-Veg">Non-Veg</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>FoodItem</th>
                        {/* <th>Category</th>
                        <th>Type</th> */}
                        <th colSpan={2}>Price</th>
                        <th colSpan={2}>Add to Cart</th>
                    </tr>
                </thead>
                {

                    foods.map((value, index) => {
                        return (
                            <tbody>
                                <tr key={value.id}>
                                    <td>{value.name}</td>
                                    {/* <td>{value.cuisine}</td>
                                    <td>{value.type}</td> */}
                                    <td colSpan={2}>{value.price}</td>
                                    <td colSpan={2}><button onClick={() => addItems(value.id)}>+</button> {value.Quantity} 
                                        <button onClick={() => removeItems(value.id)}>-</button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
            <hr />
            <h2>Your Orders</h2>
            <hr />
            
            <Billing
                foods={foods}
                totalQuantity={totalQuantity}
                totalPrice={totalPrice}
                addItems={addItems}
                removeItems={removeItems}
                placed={placed}
                reset={reset}
                order={order}
            />


        </>
    )
}