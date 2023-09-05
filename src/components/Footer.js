import React from 'react'

import "./FooterStyles.css"

import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
            <div>
              <p>Limus Pratama Regency</p>
              <p>Cileungsi, Bogor, Jawa Barat, Indonesia</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
            +6285710349056</h4>         
          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
            rayhanfahlevy@gmail.com</h4>         
          </div>
        </div>
        <div className="right">
          <h4>Visit My Social Media</h4>
          <p>This is me, Rayhan Fahlevy. I like learning new knowledge about information technology.</p>
          <div className="social">
            <a href="https://www.instagram.com/rayhanfahlevy24/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} style={{color: "#fff", marginRight: "1rem"}}/>
            </a>
            <a href="https://www.linkedin.com/in/rayhan-fahlevy-0174a9200/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
            </a>
          </div>
        </div>
      </div>
    </div>
     
  )
}

export default Footer