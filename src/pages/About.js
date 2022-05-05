import React from 'react'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'

export default function About() {
    const location = useLocation();
    console.log(location);
    const {name} = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h1>about {name} page</h1>
            <NavLink to="/home">go to {location.pathname.replace("about","home")} page</NavLink>
            <button onClick={ ()=>{ navigate("/home",{state:{id:1,name:'sabaoon'}}) }}>Go Back </button>

        </div>
    )
}

