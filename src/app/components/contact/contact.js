'use client'
import './contact.css'
import { useState } from 'react'
import Image from 'next/image'
export default function Contact() {
    const [data, setData] = useState({})
    const [btnvalue,setbtnvalue] = useState('Message')
    const getData = (e)=>{    
        setData(
            {
                ...data,[e.target.name]:e.target.value
            }
        )}
    const SubmitData = (e)=>{
        e.preventDefault()
        setbtnvalue('Loading...')     
        fetch("https://portfolio-8878.onrender.com/message", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
            .then((response) => response.json())
            .then((json) =>{
                setbtnvalue('Message')
                document.querySelectorAll('form > .form_input').forEach((ele)=>{ele.value=''})              
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
                            <img src='/contact_img.webp' alt='contact_img' />
                        </div>
                        <div className='contact_form_container'>
                            <form onSubmit={SubmitData}>
                                <label htmlFor="fname">Name<sup> &#8727;</sup></label>
                                <input type="text" id="fname" className='form_input' name="fname" placeholder="Your name.."  onInput={getData} required pattern="[A-Za-z ]+" title='Use upparcase or lowercase letter or space only' />
                                <label htmlFor="email">Emaill Address<sup> &#8727;</sup></label>
                                <input type="email" id="email" className='form_input' name="email" placeholder="Your email address.." autoComplete="auto" onInput={getData} required />                               
                                <label htmlFor="mobile">Mobile No.<sup> &#8727;</sup></label>
                                <input type="text" id="mobile" className='form_input' name="mobile" placeholder="Your mobile no.." onInput={getData} required pattern="[0-9+ ]+" title="Use only '+',space, 0-9 numbers"/>                               
                                <label htmlFor="message">Message<sup> &#8727;</sup></label>
                                <textarea id="message" className='form_input' name="message" placeholder="Write something.." style={{height:"200px"}} onInput={getData} required ></textarea>
                                <input type="submit" value={btnvalue} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
