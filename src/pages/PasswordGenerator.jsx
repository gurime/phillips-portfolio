import React from 'react'
import { useState } from "react";
import '../css/password.css'
export const PasswordGenerator = () => {

// Set the initial state for the password and password length
const [password, setPassword] = useState('');
const [passwordLength, setPasswordLength] = useState(0);

function generatePassword() {
// Set the possible characters for the password
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_=+/|[]<>{}~`;:.,-?";

// Initialize the password as an empty string
let newPassword = "";

// Set a loop to choose the characters for the password
for (let i = 0; i < Math.min(passwordLength, 25); i++) {  // limit password length to 36 characters
// Choose a random character from the possible characters
const char = chars.charAt(Math.floor(Math.random() * chars.length));
// Add the character to the password
newPassword += char;
}
// Update the password in the state
setPassword(newPassword);
}

return (
<>

<h1 className='password-title'>Password Generator</h1>

<div className='passcontainer'>
<h3  style={{color:"white"}}>Enter the desired length of the password:</h3>
<p style={{color:"white"}}>Max Length: 25</p>

<input
type="text"
value={passwordLength}
onChange={event => setPasswordLength(event.target.value)}
maxLength="16"
style={{
width:'70px',
padding:'4px',
margin:'auto',
textAlign:'center',
borderRadius:'4px',
border:'solid 1px #ccc',
outline:'none'
}}
/>

<br />
<br />

<button className='passwordbtn' onClick={generatePassword}>Generate Password</button>

<br />
<br />

<p style={{color:'white'}}>Generated password:</p>
<p className="passwordgen"><span>{password}</span></p>

</div>
</>
)
}
