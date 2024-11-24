import React from 'react'
function Contact() {
    return ( 
        <div id="contact">
                <h1>CONTACT ME</h1>
            <form action=''>
                <label htmlFor="Name"></label>
                <input type="text" id="Name" placeholder='Name' />
                <label htmlFor="Email"></label>
                <input type="email" id="Email" placeholder='Email' />
                <label htmlFor="Message"></label>
                <input type="text" id="Message" placeholder='Message' />
                <button id="formSubmit">SUBMIT</button>
            </form>
        </div>
     );
}

export default Contact;