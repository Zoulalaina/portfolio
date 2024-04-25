import axios from "axios";

const FILIERE_BASE_REST_API_URl = "http://localhost:8080/api/v1/filiere";

class FiliereService{
    getAllFiliere(){
        return axios.get(FILIERE_BASE_REST_API_URl)
    }
    createFiliere(universite){
        return axios.post(FILIERE_BASE_REST_API_URl, universite)
    }
    getFiliereById(universiteId){
        return axios.get(FILIERE_BASE_REST_API_URl+'/'+universiteId);
    }
    deleteFiliere(universiteId){
        return axios.delete(FILIERE_BASE_REST_API_URl+'/'+universiteId);
    }
    
}
export default new FiliereService();