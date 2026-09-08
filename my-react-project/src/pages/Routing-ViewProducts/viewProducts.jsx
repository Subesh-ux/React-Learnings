import { useEffect, useState } from "react"
import { data, useParams } from "react-router-dom"

export default function ViewProducts() {
    const { id, name } = useParams()
    const [product, setProduct] = useState([])
    const url = `https://dummyjson.com/products/${id}`

    useEffect(() => {
        fetch(url)
            .then(Response => Response.json())
            .then(data => {
                setProduct(data)
            })
    }, [id])

    return (

        <div className="container py-5">
            <div
                className="card border-0 shadow-lg rounded-4 overflow-hidden mx-auto"
                style={{ width: "900px" }}
            >
                <div className="d-flex">

                    <div
                        className="d-flex justify-content-center align-items-center p-4"
                        style={{
                            width: "45%",
                            backgroundColor: "#f8f9fa"
                        }}
                    >
                        <img
                            src={product.images}
                            alt={product.title}
                            style={{
                                width: "100%",
                                height: "400px",
                                objectFit: "contain"
                            }}
                        />
                    </div>

                    <div style={{ width: "55%" }}>
                        <div className="card-body p-5">

                            <span className="badge bg-primary rounded-pill px-3 py-2 mb-3">
                                {product.category}
                            </span>

                            <h2 className="fw-bold mb-2">
                                {product.title}
                            </h2>

                            <p className="text-muted mb-3">
                                {product.brand}
                            </p>

                            <p className="text-secondary lh-lg">
                                {product.description}
                            </p>

                            <h2 className="text-primary fw-bold mt-4">
                                ${product.price}
                            </h2>

                            <p className="mb-3">
                                ⭐ <strong>{product.rating}</strong>
                            </p>

                            <p className="text-muted">
                                <strong>Stock:</strong> {product.stock}
                            </p>

                            <p className="text-muted">
                                <strong>Return Policy:</strong> {product.returnPolicy}
                            </p>

                            <button className="btn btn-primary w-100 rounded-pill py-2 mt-3 fw-bold">
                                Add to Cart
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}