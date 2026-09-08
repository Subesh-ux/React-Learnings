import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import ViewProducts from "../Routing-ViewProducts/viewProducts"

export default function Productspage() {

    const url = "https://dummyjson.com/products"
    const [productsData, setProductsData] = useState([])
    const navigate = useNavigate()


    const handleProduct =(id)=>{
        navigate(`/products/${id}`)
    }

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProductsData(data.products)
                
            })


    }, [])
    return (

        <>
            <div className="container">
                <h1 className="text-primary">Products</h1>
            </div>

            <div className="container py-4">
                <div className="row g-4">
                    {productsData.map((value, index) => {
                        return (
                            <div className="col-4" key={index}>
                                <div className="card h-100 border-0 shadow rounded-4 overflow-hidden">

                                    <img
                                        src={value.images}
                                        alt={value.title}
                                        className="card-img-top p-3"
                                        style={{
                                            height: "250px",
                                            objectFit: "contain"
                                        }}
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">
                                            {value.title}
                                        </h5>

                                        <p className="text-muted mb-2">
                                            {value.brand}
                                        </p>

                                        <h5 className="text-primary fw-bold">
                                            ${value.price}
                                        </h5>

                                        <p className="mb-2">
                                            ⭐ {value.rating}
                                        </p>

                                        <button className="btn btn-primary w-100 rounded-pill" onClick={() => handleProduct(value.id)}>
                                            View Details
                                        </button>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}