import { Link } from "react-router"

export default function NavBar() {

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
                        <Link to="/cart" className="nav-link">Cart</Link>
                    </div>

                    <div className="ms-auto">
                        <Link to="/Login" className="btn btn-outline-primary rounded-pill px-4">
                            Login
                        </Link>
                    </div>

                </div>
            </nav>
        </>
    )
}