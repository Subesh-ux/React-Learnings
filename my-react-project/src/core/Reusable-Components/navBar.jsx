import {Link, useNavigate } from "react-router-dom";

export default function NavBar({isLoggedIn,logout}) {


    const navigate = useNavigate()
    
    const handleLogout =()=>{
        logout()
        navigate("/login");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light shadow-sm">
                <div className="container">

                    <h3 className="navbar-brand fw-bold mb-0">
                        ECOMMERCE.
                    </h3>

                    <div className="navbar-nav d-flex align-items-center gap-2">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/Products" className="nav-link">Products</Link>
                        <Link to="/Orders" className="nav-link">Your Orders</Link>
                        <Link to="/Cart" className="nav-link">Cart</Link>
                    </div>

                    <div className="ms-auto">
                        {isLoggedIn ? (
                            <button className="btn btn-outline-danger rounded-pill px-4" onClick={handleLogout}>Logout</button>
                        ) : (
                            <Link
                                to="/Login"
                                className="btn btn-outline-primary rounded-pill px-4"
                            >
                                Login
                            </Link>
                        )}
                    </div>

                </div>
            </nav>
        </>
    );
}