import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import React from "react";
import '../Footer/footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="content-footer">
            <Link to="https://www.linkedin.com/in/carlos-schwanke-015008170/"><div className="icon-footer"><FaLinkedin size={40}  /></div></Link>
            <Link to="https://www.instagram.com/schwanke_fontinelle?igsh=aXpycTl2Mml2b2ww&utm_source=qr"> <div className="icon-footer"><FaInstagram size={40}  /></div></Link>
            <Link to="https://web.whatsapp.com/send?phone=559292328342"><div className="icon-footer"><FaWhatsapp size={40}  /></div></Link>
        </div>
    )
};
