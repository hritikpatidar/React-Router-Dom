import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

export default function Contact() {
    const { id } = useParams()
    return (
        <div>
            <h1>contact{" "+ id} page</h1>
            <NavLink to="/about">go to about page</NavLink>
        </div>
    )
}
