import { NavLink } from "react-router-dom";
import './Navbar.css';
const Navbar=()=>{
    return(
        <div className="abc">
        <NavLink to="home">HOME</NavLink>&ensp;
        <NavLink to="about">ABOUT</NavLink>&ensp;
        <NavLink to ="gallery">GALLERY</NavLink>&ensp;
        <NavLink to="contact">CONTACT</NavLink>&ensp;
        <NavLink to="career">CAREER</NavLink>&ensp;
        <NavLink to="helpdesk">HELPDESK</NavLink>&ensp;
       {/*  <a href="/Home" >HOME</a>
        <a href="/about" >ABOUT</a>
        <a href="/contact">CONTACT</a>
        <a href="/gallery">GALLERY</a> */}
        </div>
    );
}
export default Navbar;