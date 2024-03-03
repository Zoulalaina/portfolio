import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponents = () => {
    const [employees, setEmployees] = useState([])
    

    useEffect(()=>{
        getAllEmployee();

    }, [])

    const getAllEmployee = ()=>{
        EmployeeService.getAllEmployee().then((response)=>{
            setEmployees(response.data)
            console.log(response.data)
        }).catch(error=>{
            console.log(error);
        })


    }


    const deleteEmployee =(employeeId)=>{
        console.log(employeeId); 
        EmployeeService.deleteEmployee(employeeId).then((response)=>{
            getAllEmployee();


        }).catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className = "container">
            <h2 className="text-center">List employees</h2>
            <Link to = "/add-employee" className="btn btn-primary mb-2">Add Employee</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>employees Id</th>
                    <th>employees First name</th>
                    <th>employees last name</th>
                    <th>Email Id</th>
                    <th>Action</th>

                </thead>
                <tbody>
                    {
                        employees.map(
                            employee => 
                            <tr key={employee.id}>
                                <td> {employee.id}</td>
                                <td> {employee.firstName}</td>
                                <td> {employee.lastName}</td>
                                <td> {employee.email}</td>
                                <td> 
                                    <Link className="btn btn-info" to={'/edit-employee/'+employee.id }>Uptade</Link>
                                    <button className="btn btn-danger" onClick = {()=>deleteEmployee(employee.id)}>Delete</button>
                                </td>
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>


        </div>

    )
}

export default ListEmployeeComponents