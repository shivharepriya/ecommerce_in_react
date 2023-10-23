import React from 'react'

function Size() {
    return (
        <>

            <h5 className="section-title text-uppercase mb-3"><span className="">Filter by size</span></h5>
            <div className="bg-light p-4 mb-3">
                <form>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="" />
                        <label className="" for="size-all">All Size</label>
                        <span className="border text-dark fw-bold">1000</span>
                    </div>
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="" />
                        <label className="" for="size-1">XS</label>
                        <span className="border text-dark fw-bold">150</span>
                    </div>
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="" />
                        <label className="" for="size-2">S</label>
                        <span className="border text-dark fw-bold">295</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="" />
                        <label className="" for="size-3">M</label>
                        <span className="border text-dark fw-bold">246</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="" />
                        <label className="" for="size-4">L</label>
                        <span className="border text-dark fw-bold">145</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <input type="checkbox" className="" />
                        <label className="" for="size-5">XL</label>
                        <span className="border text-dark fw-bold">168</span>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Size