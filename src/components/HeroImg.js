import "../styles/HeroImg.css";
import React from 'react';
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import Login from "./Login";

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="hrcontent">
                <center><Login /></center>
            </div>
        </div>

    )
}

export default HeroImg;