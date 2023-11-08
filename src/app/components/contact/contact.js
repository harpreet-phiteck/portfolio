'use client'
import './contact.css'
import { useState } from 'react'

export default function Contact() {
    const [data, setData] = useState({})
    const getData = (e)=>{
        console.log(e.target.value)
        setData(
            {
                ...data,[e.target.name]:e.target.value
            }
        )
    }
    const SubmitData = (e)=>{
        e.preventDefault()
        // console.log(JSON.stringify(data))        
        fetch("http://localhost:9000/message", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    return (
        <section className="contact_section" id='contact'>
            <div className="portfolio_container">
                <div className="contact_wrapper">
                    <div className="contact_heading">
                        <h2>Contact</h2>
                    </div>
                    <div className='img_form_container'>
                        <div className='contact_img_container'>
                            <img src='/contact_img.jpg' alt='contact_img' />
                        </div>
                        <div className='contact_form_container'>
                            <form onSubmit={SubmitData}>
                                <label htmlFor="fname">Name</label>
                                <input type="text" id="fname" name="name" placeholder="Your name.." onInput={getData} />

                                <label htmlFor="lname">Emaill Address</label>
                                <input type="text" id="lname" name="email" placeholder="Your last name.." onInput={getData} />                               
                                <label htmlFor="mobile">Mobile No.</label>
                                <input type="text" id="mobile" name="mobile" placeholder="Your mobile no.." onInput={getData} />                               

                                <label htmlFor="subject">Subject</label>
                                <textarea id="subject" name="message" placeholder="Write something.." style={{height:"200px"}} onInput={getData}></textarea>

                                <input type="submit" value="Message" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}