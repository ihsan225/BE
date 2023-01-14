import React from 'react'
import LpNav from '../components/LpNav'
import Footer from '../components/Footer'
import "../styles/Contact.css";
import IntroImg from "../assets/intro-bg.jpg";


const Contact = () => {
  return (
    <div>
      <LpNav />
      <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="contact">
                <h1>Contact Me</h1>
                {/* <table>
                  <tr>
                    <td>NAMA</td><td>:</td><td>IHSAN SETIYADI</td>
                  </tr>
                  <tr>
                    <td>NIM</td><td>:</td><td>2110024</td>
                  </tr>
                  <tr>
                    <td>EMAIL</td><td>:</td><td>Ikhsansetiyadi12@gmail.com</td>
                  </tr>
                </table> */}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact