import axios from "axios";

const ECOLE_BASE_REST_API_URl = "http://localhost:8080/api/v1/ecole";

class EcoleService{
    getAllEcole(){
        return axios.get(ECOLE_BASE_REST_API_URl)
    }
    create(universite){
        return axios.post(ECOLE_BASE_REST_API_URl, universite)
    }
    getEcoleById(EcoleId){
        return axios.get(ECOLE_BASE_REST_API_URl+'/'+EcoleId);
    }
    deleteEcole(EcoleId){
        return axios.delete(ECOLE_BASE_REST_API_URl+'/'+EcoleId);
    }
    
}
export default new EcoleService();