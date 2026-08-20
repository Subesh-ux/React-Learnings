import FoodItem from "./foodItem"

export default function FoodList({ foods, toAddFood ,toRemoveFood}) {
    return (
        <>
            {
                foods.map((value) => {
                    return (
                        <FoodItem
                            key={value.id}
                            food={value}
                            toAddFood={toAddFood}
                            toRemoveFood = {toRemoveFood}
                            
                        />
                    )
                })
            }
        </>
    )
}