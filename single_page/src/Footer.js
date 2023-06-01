import React from 'react'
import {ImFacebook2} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <h2>We deliver our jobs with a touch of professionalism</h2>
        <h3>Contact Us </h3>
        <div className='icons'>
            <ImFacebook2/>
            <BsInstagram/>
            <FaTwitterSquare/>
        </div>
    </div>
  )
}

export default Footer