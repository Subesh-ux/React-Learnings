import { Component } from "react";

export default class ProductStockManager extends Component {
    constructor() {
        super()
        this.state = {
            "ProductName": "%Mobile Phone%",
            "ProductPrice": 0,
            "ProductQuantity": 0,
            "TotalValue": 0,
            "StockStatus": "%Out Of Stock%"

        }
    }
    addProduct = () => {
        const newQuantity = this.state.ProductQuantity + 1
        if(newQuantity<=20){
            this.setState({
                ...this.state,
                ProductQuantity: newQuantity
            })
        }
        else
            alert("Maximum Stock Limit Reached")
    }
    sellProduct = () => {
        const newQuantity = this.state.ProductQuantity - 1
        if (newQuantity > 0) {
            this.setState({
                ...this.state,
                ProductQuantity: newQuantity
            })
        }
        else {
            this.setState({
                ...this.state,
                ProductQuantity: 0
            })
        }
    }
    reset =()=>{
        this.setState({
            ...this.state,
            ProductQuantity : 0,
            TotalValue : 0,
            StockStatus : "%Out Of Stock%" 
        })
    }
    render() {
        return (
            <>
                <div>
                    <h1>Product Details</h1>
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
                    <table>
                        <thead>
                            <tr><th>Product Name</th>
                            <th>Price</th>
                            <th>Stock Quantity</th>
                            <th>Total Value</th>
                            <th>Stock Status</th>
                            <th></th>
                            <th></th></tr>
                        </thead>
                        <tr>
                            <td>{this.state.ProductName}</td>
                            <td>{this.state.ProductPrice}</td>
                            <td>{this.state.ProductQuantity}</td>
                            <td>{this.state.TotalValue}</td>
                            <td>{this.state.StockStatus}</td>
                            <td><button onClick={this.addProduct}>Add Quantity</button></td>
                            <td><button onClick={this.sellProduct}>Sell Product</button></td>
                        </tr>
                        <tr>
                            <td colSpan={7}><button onClick={this.reset}>Reset Data</button></td>
                        </tr>
                    </table>
                </div>


            </>
        )
    }
    componentDidMount() {
        fetch("https://fakestoreapi.com/products/3")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    ProductName: data.title,
                    ProductPrice: data.price
                })
            })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.ProductQuantity !== this.state.ProductQuantity) {
                let FinalValue = (this.state.ProductPrice * this.state.ProductQuantity).toFixed(2)
                let Status =""
                

            if (this.state.ProductQuantity == 0) {
                     Status="Out Of Stock"
                }
            
            else if (this.state.ProductQuantity > 0 && this.state.ProductQuantity < 6) {
                     Status = "Available and Low Stock"
                }
            
            else if (this.state.ProductQuantity >= 6 && this.state.ProductQuantity < 11) {
                    Status = "Available"
                }
            
            else if(this.state.ProductQuantity>=11 && this.state.ProductQuantity<20) {
                    Status = "Available and Well Stocked"
                }
            else if(this.state.ProductQuantity>19){
                Status = "Maximum Stock Reached"
                
            }
            else{
                Status = "Invalid Data"
            }
            this.setState({
                ...this.state,
                TotalValue : FinalValue,
                StockStatus : Status,
                
            })
            
        }
    }
}
