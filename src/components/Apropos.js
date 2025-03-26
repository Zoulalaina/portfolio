import React from "react";
import {FaGitAlt, FaJava} from 'react-icons/fa';
import {SiJavascript, SiReact, SiNodedotjs} from 'react-icons/si';
import {DiMysql,DiPostgresql} from 'react-icons/di'
const Apropos = () =>{
    return(
        <section className="py-5">
            <div className="container">
                <h2 className="mb-4">A propos de moi</h2>
                <div className="row">
                    <div className="col-md-6">
                    <p>Originaire de Madagascar, j'ai toujour été passionné par l'informatique et les nouvelles technologies. Après des études en Informatique, j'ai au l'opportunité de faire des stages, ce qui m'a permis d'approfondir mes connaissances et de développer mes compétence en tant que développeur back-end.</p>
                </div>
                <div className="col-md-6">
                    <p>En dehors de travail, j'aime voyager et découvrir de nouvelle culture. J'apprecie également la randonnée et la pratique du sport surtout faire du basket-ball. Je suis convaincu que l'équilibre entre vie professionnelle et vie personnelle est essentiel pour atteindre l'apanouissement.</p>
                </div>
                </div>
            </div>
            <div className="container my-5">
                <h2>Mes compétences</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body text-center">
                            <FaJava className="mb-2"/>
                            <h5 className="card-title">Java</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body text-center">
                            <FaJava className="mb-2"/>
                            <h5 className="card-title">Spring</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body text-center">
                            <SiJavascript className="mb-3"/>
                            <h5 className="card-title">JavaScript</h5>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body text-center">
                            <SiReact className="mb-3"/>
                            <h5 className="card-title">React.js</h5>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body text-center">
                            <SiNodedotjs className="mb-3"/>
                            <h5 className="card-title">Node.js</h5>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body text-center">
                            <DiMysql className="mb-2"/>
                            <h5 className="card-title">MySQL</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body text-center">
                            <DiPostgresql className="mb-2"/>
                            <h5 className="card-title">PostgreSQL</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body text-center">
                            <FaGitAlt className="mb-2"/>
                            
                            <h5 className="card-title">Git</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Apropos