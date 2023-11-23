import axios from "axios";

import React from "react"
import { useEffect, useState } from "react";

function AxiosGet()
{
     const[employee,setEmployee]=useState([]);
     useEffect(()=>{
        axios
        .get('http://localhost:3000/user')
        .then((res)=>{
            setEmployee(res.data)
        })
        .catch((err)=>{
            console.log(err);
        });

     },[]);
     return(
        <div>
            <h1>Axios</h1>
            <ul>
                {employee.map((emp)=>
                (
                    <li key={emp.id}>{emp.name}</li>
                ) )}
            </ul>
        </div>
     )
};
export default AxiosGet;