import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "../pages/Routing-home/homepage"
import Productspage from "../pages/Routing-products/productspage"
import Orderpage from "../pages/Routing-Order/orderpage"
import Cartpage from "../pages/Routing-Cart/cartpage"
import Loginpage from "../pages/Routing-Login/loginpage"
import NavBar from "../core/Reusable-Components/navBar"
import PageNotFound from "../pages/Routing-PageNotFound/pagenotfound"
import ProtectionRoute from "./protectionRoute"
import { useState } from "react"
import ViewProducts from "../pages/Routing-ViewProducts/viewProducts"


export default function RoutingOutlet() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("token") ? true : false

    )

    const logout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    
}
    const loginSuccess = () => {
        setIsLoggedIn(true)
    }
    return (
        <>
            <BrowserRouter>
                <NavBar isLoggedIn={isLoggedIn}
                    logout={logout}
                />
                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="home" element={<Homepage />} />
                    <Route path="products" element={<Productspage />} />
                    <Route path="products/:id" element={<ViewProducts />} />
                    {/* <Route path="products/:brand" element={<ViewProducts/>}/> */}

                    <Route path="orders" element={
                        <ProtectionRoute>
                            <Orderpage />
                        </ProtectionRoute>
                    } />
                    <Route path="cart" element={
                        <ProtectionRoute>
                            <Cartpage />
                        </ProtectionRoute>
                    } />
                    <Route path="login" element={<Loginpage loginSuccess={loginSuccess} />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}