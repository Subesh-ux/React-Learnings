export default function Menu({ foods }) {
    return (
        <>
            <h2>Menu</h2>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>FoodItem</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {
                
                foods.map((value, index) => {
                    return (
                        <tbody>
                            <tr key={value.id}>
                                <td>{value.name}</td>
                                <td>{value.cuisine}</td>
                                <td>{value.type}</td>
                                <td>{value.price}</td>
                            </tr>
                        </tbody>
                    )
                })
                }
            </table>



        </>
    )
}