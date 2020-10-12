import React from 'react'
import { Link } from "react-router-dom";

const ServerError = () => {
    return (
        <section className="h-screen flex flex-col items-center">
            <img className="w-1/2" src={`${process.env.PUBLIC_URL}/assets/images/ilustration-not-found.jpg`} alt="you are not supposed here, please Login"/>
            <h1 className="text-3xl text-gray-900 mt-12">Opps! Server Error</h1>
            <p className="text-lg text-gray-600 mt-4 mtb-8 lg:w-3/12 xl:w-2/12 mx-auto text-center"> 
            Mously this case by the server was busy, please try later.
            </p>
            <Link  className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-5" to="/">Back to Home</Link>
        </section>
    )
}

export default ServerError
