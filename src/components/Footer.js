import "../styles/Footer.css";
import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            Copyright &copy; {new Date().getFullYear()} |<a>Kelompok 2 | Teknik Informatika | STMIK Antar Bangsa</a>
        </div>
    );
};

export default Footer;
