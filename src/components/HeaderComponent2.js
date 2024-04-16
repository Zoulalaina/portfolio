import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import EmployeeService from "../services/EmployeeService";
import {FaSearch} from "react-icons/fa"
import logo from "../assets/logo.jpg"

const HeaderComponent2 = () =>{
    const [message, setMessage] = useState("")

    useEffect(()=>{
        getStatus();
        title();
    }, [])
    const getStatus = ()=>{
        
        EmployeeService.getStatus().then((response)=>{
            if(response.data.message=="login success"){
                console.log("ty")
                console.log(response.data)
                setMessage(response.data.message)
                

                
            } else{
                console.log("diso")
            }
            
        }).catch(error=>{
            console.log(error);
        })


    }

    const logout = ()=>{
        
        EmployeeService.logout().then((response)=>{
            console.log(response.data)
            
        }).catch(error=>{
            console.log(error);
        })


    }
    const title = ()=>{
        if(message=="login success"){
            return <Link to = "/" className="navbar-brand" onClick={logout}>Deconnexion</Link>  
        }else{
            return <div>
                        <Link to = "/register" className="navbar-brand">S'inscrire</Link>   
                        <Link to = "/login" className="navbar-brand">Connexion</Link> 
                    
                    </div>
        }
    }



    return(
        <div className="App-header">
            <div className="logoApp">
            <img src={logo} alt="logo" className="logo"/>
            </div>
        
                <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <Link to = "/home" className="navbar-brand">Accueil</Link>   
                    </div>
                    <Link to = "/home" className="navbar-brand">Universités</Link>
                    <div>
                         
                        {
                            title()
                        }
                    
                    </div>
                
                </nav>
                </div>
            <div className="input-wapper">
                <FaSearch id="search-icon"/>
                <input placeholder="taper ici..." className="input-text"/>
            </div>
            
        </div>
    )
}
export default HeaderComponent2