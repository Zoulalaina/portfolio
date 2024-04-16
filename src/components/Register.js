import axios from "axios";
import React, { useState } from "react";
function Register () {
    const [userName, setUserName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    async function save(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8080/api/v1/user", {
                userName: userName,
                email: email,
                password: password,
            });
            alert('Succes')
        } catch(err){
            alert("erreur");
        }
    }

    





    return(
        <div>
            <div className="container mt-4">
                <div className="card">
                    <h1>Sign up</h1>

                    <form>
                        <div className="form group">
                            <label>User Name</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter your name"
                            value={userName} onChange={(e)=>{setUserName(e.target.value);}} />


                        </div>
                        <div className="form group">
                            <label>Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email"
                            value={email} onChange={(e)=>{setEmail(e.target.value);}} />

                        </div>
                        <div className="form group">
                            <label>Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password"
                            value={password} onChange={(e)=>{setPassword(e.target.value);}} />

                        </div>
                        <button type="submit" className="btn btn-primary mt-4" onClick={save}>Save</button>
                    </form>

                </div>

            </div>

            
        </div>
    )
    
 }
 export default Register 