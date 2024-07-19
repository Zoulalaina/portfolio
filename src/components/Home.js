import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/IMG_6101.JPG';
const Home=()=>{
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{background:"black"}}>
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={logo} className="logo"></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/"> Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/apropos"> A propos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cv"> Voir Cv</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/home"> Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>


    );
}
export default Home