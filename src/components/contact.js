import React from "react";
 const Contact= () =>{
    return(
    <section id="contact" className="py-5 bg-ligth" style={{background: '#f1f1f1'}}>
        <div className="container">
            <h2 className="text-center mb-4">
                Contactez-moi
            </h2>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="contact_info mb-4">
                        <h5>Informations de contact</h5>
                        <ul className="list-unstyled">
                            <li>
                                <i className="fas fa-phone-alt mr-2">
                                    +261 34 39 699 87
                                </i>
                            </li>
                            <li>
                                <i className="fas fa-envelope mr-2">
                                    andrianarisoalalaina046@gmail.com
                                </i>
                            </li>
                            <li>
                                <i className="fas fa-map-market-alt mr-2">
                                    Antananarivo Antsimondrano 102, Madagascar
                                </i>
                            </li>
                        </ul>
                    </div>

                    <form>
                        <div className="form-group">
                            <label for="name">Nom</label>
                            <input type="text" className= "form-control" id= "name" placeholder="Entrez votre nom"></input>

                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="text" className= "form-control" id= "email" placeholder="Entrez votre email"></input>

                        </div>
                        <div className="form-group">
                            <label for="message">Message</label>
                            <textarea className= "form-control" rows="5" id= "message" placeholder="Entrez votre email"></textarea>

                        </div>
                        <button type="submit" className="btn btn-primary">Envoyer</button>


                    </form>
                </div>
            </div>

        </div>
    </section>
    );
 }
 
 export default Contact