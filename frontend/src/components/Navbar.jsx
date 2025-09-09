import { NavLink, Link } from "react-router-dom";
import './Navbar.css';

export const Navbar = () =>{
    return (
        <>
            <div className="navbar">
                <div className="navbar-logo">
                    <NavLink to="/"> Quickkart </NavLink>
                </div>
                <ul className="navbar-links">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Login">Login</NavLink></li>
                    <li><NavLink to="/Register">Register</NavLink></li>
                </ul>
            </div>
        </>
    );
}