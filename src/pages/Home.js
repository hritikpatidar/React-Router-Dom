import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Home() {
    const location = useLocation() // use path location 
    console.log(location.pathname);
    console.log(location.state)
    return (
        <div>
            <h1>
                {location.pathname.replace("/", "")} Page </h1>
                <NavLink to="/about">{location.pathname.replace("/home" , "about")}</NavLink><br></br>
                <NavLink to="/contact/12">{location.pathname.replace("/home" , "contact")}</NavLink><br></br>
                <NavLink to="/login">{location.pathname.replace("/home" , "login")}</NavLink><br></br>
                <NavLink to="/logout">{location.pathname.replace("/home" , "logout")}</NavLink>

        </div>
    )
}
