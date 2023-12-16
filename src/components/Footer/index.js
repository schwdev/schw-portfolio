import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import React from "react";
import '../Footer/footer.css';

export default function Footer() {
    return (
        <div className="content-footer">
            <div className="icon-footer"><FaLinkedin size={40}  /></div>
            <div className="icon-footer"><FaInstagram size={40}  /></div>
            <div className="icon-footer"><FaWhatsapp size={40}  /></div>
            <div className="icon-footer"><IoIosMail size={55}  /></div>
        </div>
    )
};
