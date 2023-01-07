import { useState } from 'react';
import { TicTacToe } from '../Components/Tic-Tac-Toe'
import locatorimg from '../img/locator-icon.png'
import '../css/faq.css'

export const Faq = () => {
const [isAnswer1Visible, setAnswer1Visibility] = useState(false);
const [isAnswer2Visible, setAnswer2Visibility] = useState(false);
const [isAnswer3Visible, setAnswer3Visibility] = useState(false);




    
    
    
return (
<>
<div className="container">
<h1 className="faq-title" >Frequently Asked Questions</h1>
{/**first question block */}
<div className="question">
<h2>Contact Number</h2>
<button
id="question1"
className="question-button"
onClick={() => setAnswer1Visibility(!isAnswer1Visible)}>
<span className="plus-symbol">+</span>
</button>
<div className="answer" style={{ display: isAnswer1Visible ? 'block' : 'none' }}>
<p>&#128222; 423-208-8573</p>
</div>
</div>
{/**first question block */}


{/**second question block */}
<div className="question">
<h2>Address</h2>
<button
id="question2"
className="question-button"
onClick={() => setAnswer2Visibility(!isAnswer2Visible)}>
<span className="plus-symbol">+</span>
</button>

<div className="answer" style={{ display: isAnswer2Visible ? 'block' : 'none' }}>
<p className='locatorp'>
<img src={locatorimg} alt='...'/> 203 West Main Street Apt.107 LaFayette GA, 30728
</p>
</div>
</div>
{/**second question block */}


{/**third question block */}
<div className="question">
<h2>Email Address</h2>
<button
id="question2"
className="question-button"
onClick={() => setAnswer3Visibility(!isAnswer3Visible)}>

<span className="plus-symbol">+</span>
</button>
<div className="answer" style={{ display: isAnswer3Visible ? 'block' : 'none' }}>
<p className='locatorp'>
&#9993; ztron500@gmail.com
</p>
</div>
</div>
{/**third question block */}
</div>




<div className="container">
<h1 style={{textAlign:'center'}} className="faq-title" >Tic-Tac-Toe</h1>        
<TicTacToe/>
</div>
</>
);
};