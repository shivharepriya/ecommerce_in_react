import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
            <div className="navbar navbar-expand-md">
                <div className="container-fluid bg-dark mb-4 px-5">

                    <div className="col-lg-3 d-none d-lg-block">
                        <a className="text-decoration-none d-flex align-items-center justify-content-between bg-warning w-100" data-toggle="collapse" href="/" style={{ height: "65px", padding: "0 30px" }}>
                            <h6 className="text-dark m-0"><i className="fa fa-bars"></i>Categories</h6>
                            <i className="fa fa-angle-down text-dark"></i>
                        </a>
                    </div>

                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <a href="/" className="text-decoration-none d-block d-lg-none">
                                <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse justify-content-start" id="mynav">

                                <ul className="navbar-nav menu-navbar-nav mx-4">
                                    <li className="nav-item">
                                        <Link className="nav-link active button home" to="/">Home</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link button services" to="shop">Shop</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link button career" to="detail">Shop Detail</Link>
                                    </li>

                                    <div className="nav-item dropdown" id="page">
                                        <Link to="pages" className="nav-link dropdown-toggle" id="page" data-bs-toggle="dropdown">Pages</Link>
                                        <div className="dropdown-menu bg-warning rounded-0 border-0 m-0">
                                            <Link className='dropdown-item' to='/cart'>Shopping Cart</Link>
                                            <Link className='dropdown-item' to='/checkout'>Checkout</Link>
                                        </div>
                                    </div>

                                    <li className="nav-item">
                                        <Link className="nav-link button contact" to="contact">Contact</Link>
                                    </li>
                                </ul>

                                <ul className="navbar-nav menu-navbar-nav mx-4 ms-auto">
                                    <div className="liked-bag-btn d-none d-lg-block">
                                        <a href="/" className="btn">
                                            <i className="fas fa-heart text-warning mx-2"></i>
                                            <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingbottom: "2px" }}>0</span>
                                        </a>
                                        <a href="/" className="btn">
                                            <i className="fas fa-shopping-cart text-warning mx-2"></i>
                                            <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingbottom: "2px" }}>0</span>
                                        </a>
                                    </div>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header