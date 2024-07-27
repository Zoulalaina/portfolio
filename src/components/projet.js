import React from "react";
import projet1 from '../assets/projet1.PNG';
import projet2 from '../assets/accueil.PNG';
const Projet=()=>{
    return(
        <section className="py-5" style={{background: '#f1f1f1'}}>
            <div className="container">
                <h2 className="mb-4">Mes projets réalisés</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card-mb-4">
                            <img src={projet1} className="card-img-top" alt="projet 1"></img>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Projet 1 - Portflio
                                </h5>
                                <p className="card-text">
                                    Développement d'un portflio avec react.js
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-mb-4">
                            <img src={projet2} className="card-img-top" alt="projet 1"></img>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Projet 2 - Portail d'informations sur les universités Malagasy
                                </h5>
                                <p className="card-text">
                                    Développement d'un portail d'informations sur les universités publiques Malagasy qui regroupe toutes les informations pertinentes sur les differentes universités avec react.js et java Spring boot.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default Projet