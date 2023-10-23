import React from 'react'

function Price() {
    return (
        <>
            <h5 className="section-title text-uppercase mb-3"><span className="pr-3">Filter by price</span></h5>
            <div className="bg-light p-4 mb-3">
                <form>
                    <div className="d-flex justify-content-between mb-3">
                        <input type="checkbox" className=""/>
                        <label className="" for="price-all">All Price</label>
                        <span className="border text-dark fw-bold">1000</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className=""/>
                        <label className="" for="price-1">$0 - $100</label>
                        <span className="border text-dark fw-bold">150</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="" />
                        <label className="" for="price-2">$100 - $200</label>
                        <span className="border text-dark fw-bold">295</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="" />
                        <label className="" for="price-3">$200 - $300</label>
                        <span className="border text-dark fw-bold">246</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="" />
                        <label className="" for="price-4">$300 - $400</label>
                        <span className="border text-dark fw-bold">145</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <input type="checkbox" className="" />
                        <label className="" for="price-5">$400 - $500</label>
                        <span className="border text-dark fw-bold">168</span>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Price