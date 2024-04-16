import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import HeaderComponent from "./HeaderComponent";

function Login(){

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const navigate = useNavigate();

    async function login(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8080/api/v1/user/login", {
                email: email,
                password: password,
            }).then((res)=> 
            {
                 
                
                if(res.data.message=="Email not exist"){
                    alert("email not exist");
                    

                } else if(res.data.message=="login success"){
                    navigate("/home");
                    


                }else{
                    alert("erreur");
                }

            }, fail => {
                console.error(fail);
            });


        }catch(err){
            alert(err);
        }
    }





    return(
        <div>
            <div className="container">
                <div className="row">
                    <h1>Login</h1>
                    <hr/>


                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <form>
                            <div className="form group">
                                <label>Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email"
                                value={email}
                                onChange={(e)=>{
                                    setEmail(e.target.value);
                                }}/>


                            </div>
                            <div className="form group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password"
                                value={password}
                                onChange={(e)=>{
                                    setPassword(e.target.value);
                                }}/>
                                

                            </div>
                            <button type="submit" className="btn btn-primary" onClick={login}>Login</button>
                        </form>

                    </div>

                </div>

            </div>

        </div>
        


    );
}
export default Login;