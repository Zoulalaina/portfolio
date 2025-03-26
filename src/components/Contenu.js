import React from "react";
import { Link } from "react-router-dom";
import sary from '../assets/sary2.JPG';
import { FaLinkedin, FaGitAlt, FaFacebook, FaEnvelope, FaGithub } from "react-icons/fa";
const Contenu=()=>{
    return(
        <section className="py-5" style={{background: '#f1f1f1'}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <img src={sary} alt="ANDRIANARISOA Zo Lalaina" className="img-fluid rounded-circle md-4 animate__animated animate__fadeInLeft"></img>
                        </div>
                        <div className="col-md-6">
                            <h1 className="md-4 animate__animated animate__fadeInRigth">
                                Bonjour, je suis ANDRIANARISOA Zo Lalaina
                            </h1>
                            <p className="lead md-4">Je suis un dévéloppeur et data scientist, specialisé dans la création d'application web, API robustes et performantes, analyse et science de données</p>
                            <div className="d-flex align-items-center mb-4">
                                <i className="bi bi-code-square fs-3 me-3">

                                </i>
                                <h3 className="mb-0">Compétences techniques</h3>

                            </div>
                            <ul className="list-unistyled">
                                <li>Java, Spring boot, Spring security, JPA</li>
                                <li>JavaScript, Node.js, React.js</li>
                                <li>Python, Numpy, Pandas, Matplotlib, Seaborn, Scikit_learn</li>
                                <li> Bases de données relationnelles (MySQL, PostgreSQL)</li>
                                <li> Gestion de version avec Git</li>
                            </ul>
                            <FaLinkedin/> <FaGithub/> <FaFacebook/> <FaEnvelope/><br/><br/>

                            <Link className="btn btn-primary" to= "/contact">Contactez-moi</Link> <Link className="btn btn-primary" to= "/cv">Voir CV</Link>
                        
                    </div>
                </div>
            </div>
            
        </section>
    );
}
export default Contenu