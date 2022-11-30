import React, {Component, useState} from 'react'
import './App.css'
 const Header =()=> {
    const [navbarOpen, setNavbarOpen] =useState(false);

        return( 
        //    <h2>Header/ Navbar Component</h2> 
        <>
        <nav className="nav">
            <div className="NavbarContainer ">
               
                <div className="PillableHeaderLogo">
                    <h3 className="PillableHeader">
                        Pillable
                    </h3>
                </div>
                <div className="NavbarlistContainer">
                <div className="NavbarList">
                    {/*  */}
                    <ul className="navbar-items">
                    {/* <li>
                        Sign In
                    </li>
                    <li>Register</li> */}
                    </ul>
                </div>
                </div>

            </div>
            </nav>
            </>
        )
    }
export default  Header