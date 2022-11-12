import React, {Component} from 'react'

export default class Header extends Component {
    render(){
        return( 
        //    <h2>Header/ Navbar Component</h2> 
            <div className="NavbarContainer">
               
                <div div="PillableHeaderLogo">
                    Navbar Icon
                </div>
                <div className="NavbarlistContainer">
                <div className="NavbarList">
                    {/*  */}
                    <ul className="navbar-items">
                    <li>
                        Sign In
                    </li>
                    <li>Register</li>
                    </ul>
                </div>
                </div>

            </div>
        )
    }
}