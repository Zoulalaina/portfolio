import React from "react";
import cv from '../assets/Lalaina.pdf';
const Cv=()=>{
    return(
        <section>

                <iframe src={cv} style={{width:"100%", height:"700px"}} className="cv"></iframe>
        
        </section>

    );
}
export default Cv