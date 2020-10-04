import React, {Component} from 'react'
import {Route, Redirect, withRouter} from 'react-router-dom'

const MembarRoute = ({component: Component, match, path, location, ...rest}) => {

    const ok = localStorage.getItem("MICRO:token")

    localStorage.removeItem("MICRO:redirect")

    return (
        <Route
            {...rest}
            render={props => 
                ok ? (
                <Component {...props} />
                ) : path === "/joined/:class" ? (
                    <Redirect to={`/login?path=${location.pathname}`}/>
                ): (
                    <Redirect to={`/private?path=${location.pathname}`}/>
                )
            }
        />
    )
}

export default withRouter(MembarRoute)
