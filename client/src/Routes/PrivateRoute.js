import React from "react"
import {Route, Redirect} from "react-router-dom"
//private route that requires a token in local storage or it will redirect to home
const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <Route 
        {...rest}
        render = {props => {
            if (localStorage.getItem('token')){
                return <Component {...props} />
            } else {
                return <Redirect to="/" />
            }
        }}
        />
    )
}

export default PrivateRoute;