import React from 'react'
import {NavLink} from "react-router-dom"
import "./Navigation.css"
export default function ActiveNavigation() {
  return (
    <nav>
    <ul>
        <li><NavLink ActiveClassName="active" to="/">Home</NavLink></li>
        <li><NavLink ActiveClassName="active" to="/about">About</NavLink></li>
        <li><NavLink ActiveClassName="active" to="/contact">Contact</NavLink></li>

    </ul>
</nav>
   
  )
}
