import React from 'react'
import { NavLink, Outlet, ScrollRestoration } from 'react-router-dom'
import { Footer } from '../pages/Footer'
export const Root = () => {
return (
<>
<ScrollRestoration/>
<nav>
<div className="logo">PB.</div>
<ul>
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="about">About</NavLink></li>
<li><NavLink to="contact">Contact</NavLink></li>
<li><NavLink to="passwordgenerator">PasswordGenerator</NavLink></li>
</ul>
</nav>
<Outlet/>
<Footer/>
</>
)
}
