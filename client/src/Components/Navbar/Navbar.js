import React, { Component } from "react"
import "./Navbar.css"

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
                    <div className="container">
                        <a className="navbar-brand" href="#">Tea 4 Two</a>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div>
                        <span>logo place holder</span>
                        </div>
                        <div className="collapse navbar-collapse"
                            id="navcol-1">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="dropdown">
                                    <a className="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">Login </a>
                                    <div className="dropdown-menu" role="menu">
                                        <a href="#" className="btn btn-light action-button login" roll='button'>Log In</a>
                                        <a className="btn btn-light action-button" role="button" href="#">Sign Up</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar