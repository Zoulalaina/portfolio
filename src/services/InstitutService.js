import axios from "axios";

const INSTITUT_BASE_REST_API_URl = "http://localhost:8080/api/v1/institus";

class InstitutService{
    getAllInstitut(){
        return axios.get(INSTITUT_BASE_REST_API_URl)
    }
    create(universite){
        return axios.post(INSTITUT_BASE_REST_API_URl, universite)
    }
    getInstitutById(InstitutId){
        return axios.get(INSTITUT_BASE_REST_API_URl+'/'+InstitutId);
    }
    deleteInstitut(InstitutId){
        return axios.delete(INSTITUT_BASE_REST_API_URl+'/'+InstitutId);
    }
    
}
export default new InstitutService();