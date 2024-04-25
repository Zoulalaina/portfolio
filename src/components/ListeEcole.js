import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import EcoleService from "../services/EcoleService";


const ListeEcole=()=>{
    const[ecoles, setEcole]=useState([])

    useEffect(()=>{
        getAllEcole();
    }, [])
    const getAllEcole=()=>{
        EcoleService.getAllEcole().then((response)=>{
            setEcole(response.data)
            console.log(response.data);

        }).catch(error =>{
            console.log(error);
        })

    }

    const deleteEcole=(ecoleId)=>{
        EcoleService.deleteEcole(ecoleId).then((response)=>{
            getAllEcole();
        }).catch(error=>{
            console.log(error);
        })

    }
    return(
        <div className="container">
            <h2 className="text-center"> Liste des écoles</h2>
            <Link to ="/admin/add-ecole" className="btn btn-primary mb-2">Ajouter</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> id ecole</th>
                    <th> Nom ecole</th>
                    <th>Université</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        ecoles.map(
                            ecole=>
                            <tr key={ecole.id}>
                                <td>{ecole.id}</td>
                                <td>{ecole.nom}</td>
                                <td>{ecole.universite.nomUniversite}</td>
                                <td>
                                 <Link className="btn btn-info" to={'/edit-ecole/'+ecole.id}>Modifier</Link>
                                 <button className="btn btn-danger"  style={{marginLeft:"10px"}} onClick = {()=>deleteEcole(ecole.id)}>Supprimer</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}
export default ListeEcole