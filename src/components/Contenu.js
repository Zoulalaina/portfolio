import React from "react";
import { Link } from "react-router-dom";
import sary from '../assets/sary2.JPG';
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
                            <p className="lead md-4">Je suis un dévéloppeur back-end passionné, specialisé dans la création d'application web et API robustes et performantes.</p>
                            <div className="d-flex align-items-center mb-4">
                                <i className="bi bi-code-square fs-3 me-3">

                                </i>
                                <h3 className="mb-0">Compétences techniques</h3>

                            </div>
                            <ul className="list-unistyled">
                                <li>Java, Spring boot, Spring security, JPA</li>
                                <li>JavaScript, Node.js, React.js</li>
                                <li> Bases de données relationnelles (MySQL, PostgreSQL)</li>
                                <li> Gestion de version avec Git</li>
                            </ul>
                            <Link className="btn btn-primary" to= "/home">En savoir plus</Link>
                        
                    </div>
                </div>
            </div>
            
        </section>
    );
}
export default Contenu