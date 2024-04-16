import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import UnivService from "../services/UnivService";


const ListeUniv=()=>{
    const[universites, setUniversites]=useState([])

    useEffect(()=>{
        getAllUniversite();
    }, [])
    const getAllUniversite=()=>{
        UnivService.getAllUniv().then((response)=>{
            setUniversites(response.data)
            console.log(response.data);

        }).catch(error =>{
            console.log(error);
        })


    }

    const deleteUniv=(universiteid)=>{
        UnivService.deleteUniv(universiteid).then((response)=>{
            getAllUniversite();
        }).catch(error=>{
            console.log(error);
        })

    }
    return(
        <div className="container">
            <h2 className="text-center"> Liste des Universités</h2>
            <Link to ="/add-univ" className="btn btn-primary mb-2">Ajouter</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> id Université</th>
                    <th> Nom Université</th>
                    <th>Siege Université</th>
                    <th>Photo</th>
                    <th>Action</th>

                </thead>
                <tbody>
                    {
                        universites.map(
                            universite=>
                            <tr key={universite.idUniversite}>
                                <td>{universite.idUniversite}</td>
                                <td>{universite.nomUniversite}</td>
                                <td>{universite.siegeUniversite}</td>
                                <td><img src={'data:image/png;base64,'+universite.image} style={{width:'200px', height:'100px'}} alt="univ"></img></td>
                                <td>
                                 <Link className="btn btn-info" to={'/edit-univ/'+universite.idUniversite}>Modifier</Link>
                                 <button className="btn btn-danger" onClick={()=> deleteUniv(universite.idUniversite)} style={{marginLeft:"10px"}}>Supprimer</button>
                                
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>

        </div>
    )
}
export default ListeUniv