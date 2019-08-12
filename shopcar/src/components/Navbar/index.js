import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                ShopCar
            </Link>
            <div>
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <Link
                        to="/"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/about"
                              ? "nav-link active"
                              : "nav-link"
                        }
                        >
                            About
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                          to="/research"
                          className={
                              window.location.pathname === "/research" ? "nav-link active" : "nav-link"}
                          >
                              Research
                        </Link>
                    </li>

                    <li className ="nav-item">
                        <Link
                            to="/buy"
                            className={
                                window.location.pathname === "/buy" ? "nav-link active" : "nav-link"}
                          >
                              Buy
                        </Link>
                    </li>

                    <li className ="nav-item">
                        <Link
                            to="/media"
                            className={
                                window.location.pathname === "/media" ? "nav-link active" : "nav-link"}
                          >
                              Media
                        </Link>
                            
                    </li>
                </ul>
            </div>
        </nav>
    );

                            }



export default NavBar;