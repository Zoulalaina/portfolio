import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import FaculteService from "../services/FaculteService";


const ListeFaculte=()=>{
    const[facultes, setFaculte]=useState([])

    useEffect(()=>{
        getAllFaculte();
    }, [])
    const getAllFaculte=()=>{
        FaculteService.getAllFaculte().then((response)=>{
            setFaculte(response.data)
            console.log(response.data);

        }).catch(error =>{
            console.log(error);
        })


    }

    const deleteFaculte=(faculteId)=>{
        FaculteService.deleteFaculte(faculteId).then((response)=>{
            getAllFaculte();
        }).catch(error=>{
            console.log(error);
        })

    }
    return(
        <div className="container">
            <h2 className="text-center"> Liste des Facultés</h2>
            <Link to ="/admin/add-faculte" className="btn btn-primary mb-2">Ajouter</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> id faculté</th>
                    <th> Nom faculté</th>
                    <th>Université</th>
                    <th>Action</th>

                </thead>
                <tbody>
                    {
                        facultes.map(
                            faculte=>
                            <tr key={faculte.id}>
                                <td>{faculte.id}</td>
                                <td>{faculte.nom}</td>
                                <td>{faculte.universite.nomUniversite}</td>
                                <td>
                                 <Link className="btn btn-info" to={'/edit-faculte/'+faculte.id}>Modifier</Link>
                                 <button className="btn btn-danger"  style={{marginLeft:"10px"}} onClick = {()=>deleteFaculte(faculte.id)}>Supprimer</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>

        </div>
    )
}
export default ListeFaculte