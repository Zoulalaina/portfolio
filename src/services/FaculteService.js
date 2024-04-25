import axios from "axios";

const FACULTE_BASE_REST_API_URl = "http://localhost:8080/api/v1/faculte";

class FaculteService{
    getAllFaculte(){
        return axios.get(FACULTE_BASE_REST_API_URl)
    }
    create(universite){
        return axios.post(FACULTE_BASE_REST_API_URl, universite)
    }
    getFaculteById(faculteId){
        return axios.get(FACULTE_BASE_REST_API_URl+'/'+faculteId);
    }
    deleteFaculte(faculteId){
        return axios.delete(FACULTE_BASE_REST_API_URl+'/'+faculteId);
    }
    
}
export default new FaculteService();