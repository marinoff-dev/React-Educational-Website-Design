import React from 'react'
import './contact.css'
import Back from '../common/back/Back'

const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253609.67459296834!2d-1.7809223233155949!3d6.690058071521837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb93e59a4e4c49%3A0x829c711d7b65e682!2sKumasi%2C%20Ghana!5e0!3m2!1sfr!2sbj!4v1704987994525!5m2!1sfr!2sbj" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <>
        <Back title='Contact Us' />
        <section className='contact padding'>
            <div className="container shadow flexSB">
                <div className="left row">
                    <iframe src={map}></iframe>
                </div>
                <div className="rigth row">
                    <h1>Contact Us</h1>
                    <p>Lorem Ipsum is simply dummy specimen book.</p>

                    <div className="items grid2">
                        <div className="box">
                            <h4>ADDRESS: </h4>
                            <p>198 west 21st street, suite 751 New York NY 10016</p>
                        </div>
                        <div className="box">
                            <h4>Email: </h4>
                            <p>info@gmail.com</p>
                        </div>
                        <div className="box">
                            <h4>PHONE: </h4>
                            <p>+123 456 7898</p>
                        </div>
                    </div>
                    <form action="">
                        <div className='flexSB'>
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                        </div>
                        <input type="email" placeholder='Subject' />
                        <textarea cols="30" rows="10">Create a message here...</textarea>
                        <button className='primary-btn'>SEND MESSAGE</button>
                    </form>
                    <h3>Follow us here</h3>
                    <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact