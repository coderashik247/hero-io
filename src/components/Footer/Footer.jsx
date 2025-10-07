import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link, NavLink } from "react-router";
import logoImg from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <Link to={'/'}> <img src={logoImg} className="h-25" alt="" /> </Link>
      <nav className="grid grid-flow-col gap-4">
        <Link to={'/'} className="link link-hover text-lg">Home</Link>
        <Link to={'https://github.com/coderashik247'} className="link link-hover text-lg">About</Link>
        <Link to={'/apps'} className="link link-hover text-lg">Apps</Link>
        <Link to={'/installation'} className="link link-hover text-lg">Installation</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
            <NavLink to={'https://www.facebook.com/ashikurashik.2001/'} target="_blank">
                <FaFacebook color="blue" size={35} />
            </NavLink>
            <NavLink to={'https://web.whatsapp.com/'} target="_blank">
                <IoLogoWhatsapp color="green" size={35} />
            </NavLink>
            <NavLink to={'https://www.linkedin.com/in/ashikur-ashik-731256225/'} target="_blank">
                <FaLinkedin color={"#0077B5"} size={35} />
            </NavLink>
            <NavLink to={'https://github.com/coderashik247'} target="_blank">
                <FaGithub color="black" size={35} />
            </NavLink>
        </div>
      </nav>
      <aside>
        <p className="text-lg">
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
