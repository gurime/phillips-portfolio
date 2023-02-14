import React from 'react'
import { Clock } from '../Components/Clock'
import '../css/about.css'

export const About = () => {
    document.title = 'Phillip Bailey | About'
return (
<>
<div className="aboutcontainer">
<div className="aboutme-clock">
<h1 className="about-title">About Me</h1>
<h1 className="main-clock" id="clock"><Clock/></h1>
</div>
<p>Hi there, and thanks for stopping by! My name is Phillip Andrew Bailey and I am a UX/UI designer based in LaFayette, Georgia. I hold a bachelor's and associate's degree in computer science from Southern New Hampshire University, where I spent 5 years studying and learning about programming, Technology, and computer systems.</p>
  
<p> With a background in Information Technology/Web Design and a passion for creating intuitive and visually appealing user experiences, I have had the opportunity to work on a wide range of projects using languages like Angular, React JS, and Vue.
My design philosophy revolves around the idea that form should follow function, and I strive to create designs that are not only aesthetically pleasing but also highly functional and efficient. </p>
  
<p>I am skilled in a variety of design tools including Affinity designer, Affinity Photo, Figma.
In my free time, you can find me staying up-to-date on the latest design trends, tinkering with new design tools, and collaborating with other designers on personal projects. Thank you for visiting my website and please feel free to reach out if you have any questions or would like to hire me.</p>
<hr
style={{
color:'#af66ff',
border:'solid 1px currentcolor'
}}
/>

<div className='about-education'>
<h1>Education</h1>


<p>Southern New Hampshire University, Manchester, NH</p>
<div
style={{
display:'flex',
justifyContent:'space-between',
placeItems:'center'
}}
>
<p>Associate of Science in Information Technology </p>
<p>September 2021</p>
</div>



<ul style={{display:'grid',gridGap:'20px'}}>
<li style={{listStyleType:'disc',color:'#fff'}}>Relevant Coursework: Website Design | Computer Platform Technologies | Web and Mobile User Experiences | Business Systems Analysis & Design</li>
<li style={{listStyleType:'disc',color:'#fff'}}>GPA: 3.097</li>
</ul>





<p>Southern New Hampshire University, Manchester, NH</p>
<div
style={{
display:'flex',
justifyContent:'space-between',
placeItems:'center'
}}
>
<p>Bachelor of Science in Information Technology </p>
<p>January 2023</p>
</div>



<ul style={{display:'grid',gridGap:'20px'}}>
<li style={{listStyleType:'disc',color:'#fff'}}>Relevant Coursework: Website Design | Computer Platform Technologies | Web and Mobile User Experiences | Business Systems Analysis & Design</li>
<li style={{listStyleType:'disc',color:'#fff'}}>GPA: 3.134</li>
</ul>

<hr
style={{
color:'#af66ff',
border:'solid 1px currentcolor'
}} />

<h1>CORE COMPETENCIES</h1>
<p><b>Platforms:</b> Windows 7, Windows 8.1, Windows 10, Windows 11, MacOS</p>
<p><b>Networking:</b>  LAN / WAN Administration, VPN</p>
<p><b>Languages:</b>HTML, CSS, JavaScript, React, Angular, Vue</p>
<p><b>Tools:</b>LAN Manager, Wix, Figma, Affinity Photo, Affinity Designer, Affinity Publisher, Bootstrap, jQuery, Iobit Advanced System Care, MS Office Suite (Word, Excel, PowerPoint, Outlook).</p>


<hr
style={{
color:'#af66ff',
border:'solid 1px currentcolor'
}} />
<h1>INFORMATION TECHNIOLGY PROJECTS</h1>
<p><b>Gracious-Crossing:</b> Examine the latest trends in the field of UI/UX design in order to understand the approaches and strategies being used by competitors in the industry.</p>
<p><b>Belief-Ministries: </b> Combining creativity with a knowledge of design principles resulted in the creation of a website that is responsive to user interactions.</p>
<p><b>Barberfaith </b> Designing websites that function optimally on both desktop and mobile devices.</p>
<p><b>GulimeShop </b> Developing a website with a responsive navigation and content layout that enhances the user experience.</p>

<h1>CERTFICATES</h1>
<p><b>Fall-2022</b>In Recognition of Outstanding Academic Achievement - Southern New Hampshire University</p>
</div>
</div>
</>
)
}
