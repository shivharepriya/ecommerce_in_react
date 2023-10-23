import React from 'react'
import Services from './Services'
import Categories from './Categories'

function Hero() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 mb-3">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="" src="img/carousel-1.jpg" style={{ objectfit: "cover" }} alt='' />
                                    <div className="carousel-caption d-flex align-items-center justify-content-center">
                                        <div className="p-3">
                                            <h1 className="fs-1 text-white mb-3">Men Fashion</h1>
                                            <p className="mx-md-5">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <a className="btn btn-outline-light py-2 px-4 mt-3" href="/">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="" src="img/carousel-2.jpg" style={{ objectfit: "cover" }} alt='' />
                                    <div className="carousel-caption d-flex align-items-center justify-content-center">
                                        <div className="p-3">
                                            <h1 className="fs-1 text-white mb-3">Women Fashion</h1>
                                            <p className="mx-md-5 px-5">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <a className="btn btn-outline-light py-2 px-4 mt-3" href="/">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="" src="img/carousel-3.jpg" style={{ objectfit: "cover" }} alt='' />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3">
                                            <h1 className="fs-4 text-white mb-3">Kids Fashion</h1>
                                            <p className="mx-md-5 px-5">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <a className="btn btn-outline-light py-2 px-4 mt-3" href="/">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-4 col-12 p-0">
                        <div className="first-section-img">
                            <img src="img/offer-1.jpg" className="img-fluid img-thumbnail" alt="" />
                            <div className="first-section-text mt-3">
                                <h6 class="text-white text-uppercase">Save 20%</h6>
                                <h3 class="text-white mb-3 fw-bold">Special Offer</h3>
                                <a href="/" className="btn btn-warning">Shop Now</a>
                            </div>
                        </div>


                        <div className="first-section-img">
                            <img src="img/offer-2.jpg" className="img-fluid img-thumbnail" alt="" />
                            <div className="first-section-text mt-3">
                                <h6 class="text-white text-uppercase">Save 20%</h6>
                                <h3 class="text-white mb-3 fw-bold">Special Offer</h3>
                                <a href="/" className="btn btn-warning">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <Services/>
            <Categories/>
        </>
    )
}

export default Hero