import React, {Component, useState} from 'react'

 const Header =()=> {
    const [navbarOpen, setNavbarOpen] =useState(false);

        return( 
        //    <h2>Header/ Navbar Component</h2> 
        <>
        <nav className="nav">
            <div className="NavbarContainer ">
               
                <div div="PillableHeaderLogo">
                    Navbar Icon
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