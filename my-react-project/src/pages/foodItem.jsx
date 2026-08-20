export default function FoodItem({food,toAddFood,toRemoveFood}) {
    
     

    return (
        <>
            <tr >
                <td>{food.name}</td>
                <td>{food.price}</td>
                <td>{food.quantity}</td>
                <td><button onClick={() => toAddFood(food.id)}>+</button></td>
                <td><button onClick={()=> toRemoveFood(food.id)} disabled={food.quantity==0}>-</button></td>
            </tr>
            

        </>
    )
}