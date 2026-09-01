import { BrowserRouter,Routes,Route} from "react-router"
import Homepage from "../pages/Routing-home/homepage"
import Productspage from "../pages/Routing-products/productspage"
import Orderpage from "../pages/Routing-Order/orderpage"
import Cartpage from "../pages/Routing-Cart/cartpage"
import Loginpage from "../pages/Routing-Login/loginpage"
import NavBar from "../core/Reusable-Components/navBar"
import PageNotFound from "../pages/Routing-PageNotFound/pagenotfound"


export default function RoutingOutlet(){

    return(
        <>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route index element={<Homepage/>} />
                <Route path="home" element={<Homepage/>}/>
                <Route path="Products" element={<Productspage/>}/>
                <Route path="Orders" element={<Orderpage/>}/>
                <Route path="Cart" element={<Cartpage/>}/>
                <Route path="Login" element={<Loginpage/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}