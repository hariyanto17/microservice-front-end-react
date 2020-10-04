import React from 'react'
import propTypes from 'prop-types'
import {Link, withRouter } from 'react-router-dom'
import {ReactComponent as Logo} from 'assets/images/logo.svg'

const Header = ({onLight, location}) => {

    const linkCOlor = onLight ? "text-gray-900" : "text-white"


    const linkCTA = location.pathname.indexOf("/login") > -1 ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register`
                    :`${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`
    const textCTA = location.pathname.indexOf("/login") > -1 ? "daftar" : "Masuk"

    return (
        <header className="flex justify-between item-center">
            <div style={{height: 54}}>
                <Logo className={onLight ? "on-light" : "on-dark"}></Logo>
            </div>
            <ul className="flex">
                <li>
                    <Link href="/" ><a className={[linkCOlor, "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" ")} >Home</a></Link>
                </li>
                <li>
                    <Link href="/" ><a className={[linkCOlor, "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" ")} >Pricing</a></Link>
                </li>
                <li>
                    <Link href="/" ><a className={[linkCOlor, "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" ")} >Features</a></Link>
                </li>
                <li>
                    <Link href="/" ><a className={[linkCOlor, "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" ")} >Story</a></Link>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noereferre"
                        href={linkCTA}
                        className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6" >
                        {textCTA}
                    </a>
                </li>
            </ul>
        </header>
    )
}

Header.propTypes = {
    onLight: propTypes.bool,
}

export default withRouter(Header)
