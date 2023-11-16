import React from 'react'
import Breadcrumb from './Breadcrumb'

function ShoppingCart() {
    return (
        <>
            <Breadcrumb />

            {/* <!-- Cart Start --> */}
            <div className="container-fluid">
                <div className="row px-xl-5">

                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-light table-borderless table-hover text-center mb-0">
                            <thead className="table-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                <tr>
                                    <td className="align-middle"><img src="img/product-1.jpg" alt="" style={{ width: "50px" }} /> Product Name</td>
                                    <td className="align-middle">$150</td>
                                    <td className="align-middle">
                                        <div className="input-group mx-auto" style={{ width: "100px" }}>
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-warning btn-minus" >
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                            </div>
                                            <input type="text" className="form-control form-control-sm bg-light border-0 text-center" value="1" />
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-warning btn-plus">
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle">$150</td>
                                    <td className="align-middle"><button className="btn btn-sm btn-danger"><i className="fa fa-times"></i></button></td>
                                </tr>

                                <tr>
                                    <td className="align-middle"><img src="img/product-2.jpg" alt="" style={{ width: "50px" }} /> Product Name</td>
                                    <td className="align-middle">$150</td>
                                    <td className="align-middle">
                                        <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-warning btn-minus" >
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                            </div>
                                            <input type="text" className="form-control form-control-sm bg-light border-0 text-center" value="1" />
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-warning btn-plus">
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle">$150</td>
                                    <td className="align-middle"><button className="btn btn-sm btn-danger"><i className="fa fa-times"></i></button></td>
                                </tr>

                                <tr>
                                    <td className="align-middle"><img src="img/product-3.jpg" alt="" style={{ width: "50px" }} /> Product Name</td>
                                    <td className="align-middle">$150</td>
                                    <td className="align-middle">
                                        <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-warning btn-minus" >
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                            </div>
                                            <input type="text" className="form-control form-control-sm bg-light border-0 text-center" value="1" />
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-warning btn-plus">
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle">$150</td>
                                    <td className="align-middle"><button className="btn btn-sm btn-danger"><i className="fa fa-times"></i></button></td>
                                </tr>

                                <tr>
                                    <td className="align-middle"><img src="img/product-4.jpg" alt="" style={{ width: "50px" }} /> Product Name</td>
                                    <td className="align-middle">$150</td>
                                    <td className="align-middle">
                                        <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-warning btn-minus" >
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                            </div>
                                            <input type="text" className="form-control form-control-sm bg-light border-0 text-center" value="1" />
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-warning btn-plus">
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle">$150</td>
                                    <td className="align-middle"><button className="btn btn-sm btn-danger"><i className="fa fa-times"></i></button></td>
                                </tr>

                                <tr>
                                    <td className="align-middle"><img src="img/product-5.jpg" alt="" style={{ width: "50px" }} /> Product Name</td>
                                    <td className="align-middle">$150</td>
                                    <td className="align-middle">
                                        <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-warning btn-minus" >
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                            </div>
                                            <input type="text" className="form-control form-control-sm bg-light border-0 text-center" value="1" />
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-warning btn-plus">
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle">$150</td>
                                    <td className="align-middle"><button className="btn btn-sm btn-danger"><i className="fa fa-times"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-lg-4">
                        <form className="mb-3" action="">
                            <div className="input-group">
                                <input type="text" className="form-control border-0 p-2" placeholder="Coupon Code" />
                                <div className="input-group-append">
                                    <button className="btn btn-warning p-2">Apply Coupon</button>
                                </div>
                            </div>
                        </form>

                        <h5 className="text-uppercase fw-bold mb-3"><span className=" pr-3">Cart Summary</span></h5>

                        <div className="bg-light p-3 mt-4">
                            <div className="border-bottom pb-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h6>Subtotal</h6>
                                    <h6>$150</h6>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <h6 className="">Shipping</h6>
                                    <h6 className="">$10</h6>
                                </div>
                            </div>

                            <div className="pt-2">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5>Total</h5>
                                    <h5>$160</h5>
                                </div>
                                <button className="btn btn-block btn-warning fw-bold my-3 py-3">Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- Cart End --> */}
        </>
    )
}

export default ShoppingCart