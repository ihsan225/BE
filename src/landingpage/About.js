import React from 'react'
import LpNav from '../components/LpNav'
import Footer from '../components/Footer'
import "../styles/About.css";
import IntroImg from "../assets/intro-bg.jpg";


const About = () => {
  return (
    <div>
      <LpNav />
      <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="about">
                <h1>ABOUT</h1>
                <br/>
                <p>This is a website project as a final exam assignment for a framework programming course majoring in informatics engineering - <a href="https://www.instagram.com/stmikantarbangsaofficial/?hl=id">STMIK Antar Bangsa</a></p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default About