import React from 'react'
import { NavLink } from 'react-router-dom'
import CardGrid from '../Components/CardGrid'
import { Clock } from '../Components/Clock'
import '../css/home.css'
import propic from '../img/pro-phil.jpeg'
import { Footer } from './Footer'
export const Home = () => {
return (
<>
{/**hero */}
<div className="hero">
<h1 className="hero-title"><span>Welcome to My Website</span></h1>
<p className="hero-description">Learn more about me and what I do.</p>
<NavLink to="about" className="hero-button">Explore About</NavLink>
</div>
{/**hero */}

{/**profile pic */}
<div className="profilepic-box">
<h1 className="main-clock" id="clock"><Clock/></h1>
<img src={propic} alt="..."/>
</div>
{/**profile pic */}


<div className='Mywork-Title'><h1>My Work</h1>
</div>

<div>
<CardGrid/>
</div>

<Footer/>
</>
)
}