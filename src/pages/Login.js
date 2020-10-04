import React, {useEffect} from 'react'

import Header from 'parts/Header';
import Footer from 'parts/Footer';
import LoginForm from 'parts/LoginForm';

const Login = () => {

    useEffect(() => {
        window.scroll(0,0);
    }, [])

    return (
        <>
            <section className="container mx-auto pt-10">
                <Header onLight/>
            </section>
            <section className="container mx-auto pt-10">
                <LoginForm/>
            </section>
            <section className="mt-24 bg-indigo-1000 py-12">
                <Footer onLight/>
            </section>
        </>
    )
}

export default Login
