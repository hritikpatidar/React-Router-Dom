import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Logout() {
    const location = useLocation()
    return (
        <div>
            <h1>{location.pathname.replace("/","")} page</h1>
            <NavLink to="/home"> go to home page</NavLink>
        </div>
    )
}
