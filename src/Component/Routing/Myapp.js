import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Helpdesk from "./Helpdesk";
import About from "./About";
import Gallery from "./Gallery";
import Career from "./Career";
import Home from "./Home";
import Contact from "./Contact";

const Myapp=()=>{
    return(
        <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/ABOUT" element={<About/>}></Route>
            <Route path="/CONTACT" element={<Contact/>}></Route>
            <Route path="/Gallery" element={<Gallery/>}></Route>
            <Route path="/Career" element={<Career/>}></Route>
            <Route path="/Helpdesk" element={<Helpdesk/>}></Route>
        </Routes>
        </div>
    );
}
export default Myapp;