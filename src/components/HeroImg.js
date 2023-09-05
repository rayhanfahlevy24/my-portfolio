import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../assets/intro-bg.jpg"

import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, MY NAME IS RAYHAN FAHLEVY</p>
            <h1>FRONT END DEVELOPER</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/about" className="btn btn-light">About</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg