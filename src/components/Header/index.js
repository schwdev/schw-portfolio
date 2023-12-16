import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  const navRef = useRef(); // Tem ligação com o DOM

  const toggleNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <header>
       <NavLink to="/" className="navbar-brand fs-3" style={{ color: "#ADF1D2"}}>SchwDev</NavLink>
      <nav ref={navRef}>
        
        <NavLink to="/" onClick={toggleNavbar} style={({ isActive }) => ({color: isActive ? '#ADF1D2' : '#96C5B0'})}>
          Home</NavLink>
        <NavLink to="/sobre" onClick={toggleNavbar} style={({ isActive }) => ({color: isActive ? '#ADF1D2' : '#96C5B0'})}>
          Experiência</NavLink>
        <NavLink to="/galeria"  onClick={toggleNavbar} style={({ isActive }) => ({color: isActive ? '#ADF1D2' : '#96C5B0'})}>
          Serviços</NavLink>
        <NavLink to="/contato" onClick={toggleNavbar} style={({ isActive }) => ({color: isActive ? '#ADF1D2' : '#96C5B0'})}>
          Contato</NavLink>
        
        <button
          className="nav-btn nav-close-btn"
          onClick={toggleNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={toggleNavbar}>
        <FaBars />
      </button>
    </header>
  );
}





















// import { NavLink } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import '../../components/Header/header.css';



// export default function Header() {
//   return (


//     <>
//       <Navbar expand="lg" id="navbar-content" data-bs-theme="dark" className="justify-content-evenly bg-violeta" >
//         <div>
//           <NavLink to="/" className="navbar-brand fs-3">SchwDev</NavLink>
//         </div>

//         <div className="d-flex flex-column">
//           <Navbar.Toggle aria-controls="basic-navbar-nav"/>

//           <Navbar.Collapse id="basic-navbar-nav">

//             <Nav className="me-auto gap-5">
//               <NavLink to="/" className="fs-4 navlink"
//               style={({ isActive }) => ({color: isActive ? '#ADF1D2' : '#96C5B0'})}>
//                 Home</NavLink>
//               <NavLink to="/sobre" className="fs-4 navlink"
//               style={({ isActive }) => ({color: isActive ? '#ADF1D2' : '#96C5B0'})}>
//                 Experiência</NavLink>
//               <NavLink to="/galeria" className="fs-4 navlink"
//               style={({ isActive }) => ({color: isActive ? '#ADF1D2' : '#96C5B0'})}>
//                 Serviços</NavLink>
//               <NavLink to="/contato" className="fs-4 navlink"
//               style={({ isActive }) => ({color: isActive ? '#ADF1D2' : '#96C5B0'})}>
//                 Contato</NavLink>
//             </Nav>
//           </Navbar.Collapse>
//         </div>
//       </Navbar>

//           </>

//   )
// };
