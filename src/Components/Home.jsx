import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import bikeImage from '../image/bike2.jpg'

const Home = () => {
    return (


        <>
            <Header />
            <Outlet />
            <div className="hero">
                <div className="card bg-dark text-white border-0">
                    <img src={bikeImage} className="card-img" alt="BackGround"
                        height='579px' />
                    <div className="card-img-overlay d-flex flex-column
           justify-content-center">
                        <div className="container">
                            <h5 className="card-title display-3 fw-bolder mb-0">CASES OF STOLEN BIKE</h5>
                            <p className="card-text lead fs-2">
                                CHECK OUT ALL YOUR STATUS
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home