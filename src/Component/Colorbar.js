import React from 'react'

function Colorbar() {
    return (
        <>
            <h5 className="section-title position-relative text-uppercase mb-3 mt-3"><span className="">Filter by color</span></h5>
            <div className="bg-light p-4 mb-3">
                <form>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" />
                        <label className="" for="price-all">All Color</label>
                        <span className="border text-dark fw-bold">1000</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" />
                        <label className="" for="color-1">Black</label>
                        <span className="border text-dark fw-bold">150</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" />
                        <label className="" for="color-2">White</label>
                        <span className="border text-dark fw-bold">295</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox"/>
                        <label className="" for="color-3">Red</label>
                        <span className="border text-dark fw-bold">246</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox"/>
                        <label className="" for="color-4">Blue</label>
                        <span className="border text-dark fw-bold">145</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <input type="checkbox"/>
                        <label className="" for="color-5">Green</label>
                        <span className="text-dark border fw-bold">168</span>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Colorbar