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
        fetch("https://portfolio-8878.onrender.com/message", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
            .then((response) => response.json())
            .then((json) =>{
                alert('Your message has been successfully sent')
            });
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
                                <input type="text" id="fname" name="name" placeholder="Your name.." onInput={getData} required pattern="[A-Za-z ]+" title='Use upparcase or lowercase letter or space only' />

                                <label htmlFor="lname">Emaill Address</label>
                                <input type="email" id="lname" name="email" placeholder="Your email address.." onInput={getData} required />                               
                                <label htmlFor="mobile">Mobile No.</label>
                                <input type="text" id="mobile" name="mobile" placeholder="Your mobile no.." onInput={getData} required pattern="[0-9+ ]+" title="Use only '+',space, 0-9 numbers"/>                               

                                <label htmlFor="subject">Message</label>
                                <textarea id="subject" name="message" placeholder="Write something.." style={{height:"200px"}} onInput={getData} required ></textarea>

                                <input type="submit" value="Message" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
