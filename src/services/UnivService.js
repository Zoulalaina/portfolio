import axios from "axios";

const UNIV_BASE_REST_API_URl = "http://localhost:8080/api/v1/university";

class UnivService{
    getAllUniv(){
        return axios.get(UNIV_BASE_REST_API_URl)
    }
    createUniv(universite){
        return axios.post(UNIV_BASE_REST_API_URl, universite)
    }
    getUnivById(universiteId){
        return axios.get(UNIV_BASE_REST_API_URl+'/'+universiteId);
    }
    deleteUniv(universiteId){
        return axios.delete(UNIV_BASE_REST_API_URl+'/'+universiteId);
    }
    
}
export default new UnivService();