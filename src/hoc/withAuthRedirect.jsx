import React from 'react'
import connect from "react-redux/lib/connect/connect";
import { Navigate } from 'react-router-dom'
   
const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    const redirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to='/login' />
        return <Component {...props}/>
    }

    return connect(mapStateToPropsForRedirect)(redirectComponent)
}