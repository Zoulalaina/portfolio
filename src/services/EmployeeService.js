import axios from "axios";

const EMPLOYEE_BASE_REST_URL='http://localhost:8080/api/v1/user';
const EMPLOYEE_BASE_REST_URL2='http://localhost:8080/api/v1/user/logout';
class EmployeeService{
    getStatus(){
        return axios.get(EMPLOYEE_BASE_REST_URL)
    }
    logout(){
        return axios.get(EMPLOYEE_BASE_REST_URL2)
    }
    
}

export default new EmployeeService();