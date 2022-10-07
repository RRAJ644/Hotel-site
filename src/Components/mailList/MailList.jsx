import React from 'react'
import './MailList.css'
const MailList = () => {
  return (
    <div className='mail'>
        <h1 className='mail-title'>Save time, save money!</h1>
        <span className='mail-desc'>Sign up and we will send the best deals to you</span>
        <div className='mail-input-cont'>
            <input type="text" placeholder='Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList