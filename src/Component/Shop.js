import React from 'react'
import Breadcrumb from './Breadcrumb'
import Size from './Size'
import Price from './Price'
import Colorbar from './Colorbar'

function Shop() {
    return (
        <>
            <Breadcrumb />

            <div className="container-fluid">
                <div className="row px-xl-4">
                    <div className="col-lg-3 col-md-4">
                        <Price />
                        <Colorbar />
                        <Size />
                    </div>

                    {/* shop product start */}

                    <div className="col-lg-9 col-md-8">
                        <div className="row pb-3">

                            <div className="col-12 pb-1">
                                <div className="d-flex align-items-center justify-content-between mb-4">

                                    <div className="ml-2">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-bs-toggle="dropdown">Sorting</button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="/">Latest</a>
                                                <a className="dropdown-item" href="/">Popularity</a>
                                                <a className="dropdown-item" href="/">Best Rating</a>
                                            </div>
                                        </div>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-bs-toggle="dropdown">Showing</button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="/">10</a>
                                                <a className="dropdown-item" href="/">20</a>
                                                <a className="dropdown-item" href="/">30</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product-item bg-light mb-4">
                                    <div className="product-img">
                                        <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
                                        <div className="product-action">
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <a className="text-decoration-none" href="/">Product Name Goes Here</a>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mb-1">
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small>(99)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product-item bg-light">
                                    <div className="product-img">
                                        <img className="img-fluid w-100" src="img/product-2.jpg" alt="" />
                                        <div className="product-action">
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <a className="text-decoration-none" href="/">Product Name Goes Here</a>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mb-1">
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star-half-alt text-warning"></small>
                                            <small>(99)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product-item bg-light">
                                    <div className="product-img">
                                        <img className="img-fluid w-100" src="img/product-3.jpg" alt="" />
                                        <div className="product-action">
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <a className="text-decoration-none" href="/">Product Name Goes Here</a>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>$123.00</h5><h6 className="text-muted"><del>$123.00</del></h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mb-1">
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star-half-alt text-warning"></small>
                                            <small className="far fa-star text-warning"></small>
                                            <small>(99)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product-item bg-light">
                                    <div className="product-img">
                                        <img className="img-fluid w-100" src="img/product-4.jpg" alt="" />
                                        <div className="product-action">
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <a className="text-decoration-none" href="/">Product Name Goes Here</a>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>$123.00</h5><h6 className="text-muted"><del>$123.00</del></h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mb-1">
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="far fa-star text-warning"></small>
                                            <small className="far fa-star text-warning"></small>
                                            <small>(99)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product-item bg-light">
                                    <div className="product-img">
                                        <img className="img-fluid w-100" src="img/product-5.jpg" alt="" />
                                        <div className="product-action">
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <a className="text-decoration-none" href="/">Product Name Goes Here</a>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>$123.00</h5><h6 className="text-muted"><del>$123.00</del></h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mb-1">
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="far fa-star text-warning"></small>
                                            <small className="far fa-star text-warning"></small>
                                            <small>(99)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product-item bg-light">
                                    <div className="product-img">
                                        <img className="img-fluid w-100" src="img/product-6.jpg" alt="" />
                                        <div className="product-action">
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <a className="text-decoration-none" href="/">Product Name Goes Here</a>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>$123.00</h5><h6 className="text-muted"><del>$123.00</del></h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mb-1">
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="far fa-star text-warning"></small>
                                            <small className="far fa-star text-warning"></small>
                                            <small>(99)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 mt-5">
                                <nav>
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled"><a className="page-link" href="/"><span>Previous</span></a></li>
                                        <li className="page-item active"><a className="page-link border-0 bg-warning fw-bold" href="/">1</a></li>
                                        <li className="page-item"><a className="page-link text-warning fw-bold" href="/">2</a></li>
                                        <li className="page-item"><a className="page-link text-warning fw-bold" href="/">3</a></li>
                                        <li className="page-item"><a className="page-link text-warning fw-bold" href="/">Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* shop product end */}
                </div>
            </div>
        </>
    )
}

export default Shop