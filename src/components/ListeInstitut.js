import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import InstitutService from "../services/InstitutService";


const ListeInstitut=()=>{
    const[instituts, setInstitut]=useState([])

    useEffect(()=>{
        getAllInstitut();
    }, [])
    const getAllInstitut=()=>{
        InstitutService.getAllInstitut().then((response)=>{
            setInstitut(response.data)
            console.log(response.data);

        }).catch(error =>{
            console.log(error);
        })

    }

    const deleteInstitut=(institutId)=>{
        InstitutService.deleteInstitut(institutId).then((response)=>{
            getAllInstitut();
        }).catch(error=>{
            console.log(error);
        })

    }
    return(
        <div className="container">
            <h2 className="text-center"> Liste des institus</h2>
            <Link to ="/admin/add-institut" className="btn btn-primary mb-2">Ajouter</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> id institut</th>
                    <th> Nom institut</th>
                    <th>Université</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        instituts.map(
                            institut=>
                            <tr key={institut.id}>
                                <td>{institut.id}</td>
                                <td>{institut.nom}</td>
                                <td>{institut.universite.nomUniversite}</td>
                                <td>
                                 <Link className="btn btn-info" to={'/edit-institut/'+institut.id}>Modifier</Link>
                                 <button className="btn btn-danger"  style={{marginLeft:"10px"}} onClick = {()=>deleteInstitut(institut.id)}>Supprimer</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}
export default ListeInstitut