import React from 'react'

import githutimg from '../img/GitHub-Mark-Light-64px.png'
import linkedin from '../img/linkedin-icon.png'


export const Footer = () => {
const gitHubhandleClick = () => {
window.open('https://github.com/gurime', '_blank');
};
const linkedinhandleClick = () => {
window.open('https://www.linkedin.com/in/ogphillip-bailey/', '_blank');
};
return (
    <>
{/**footer */}
<footer>
<div className="footer-container">
<div className="social-links-box">
<p>&#169;Created by Phillip Andrew Bailey</p>
<div style={{marginRight:'1rem',display:'flex'}}>
<img  onClick={gitHubhandleClick}  src={linkedin} alt=""/>
<div style={{padding: '0 5px'}}></div>
<img onClick={linkedinhandleClick} src={githutimg} alt=""/>
</div>
</div>
</div>
</footer>
{/**footer */}


    </>
  )
}
