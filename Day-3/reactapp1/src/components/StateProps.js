import { useState } from "react";
function StateProps()
{
    const[name,setName]=useState("John");
    const[num,setNum]=useState(12);
    const [student,setStudent]= useState({name: "Mike",age:17});
    //change name
    const nameHandler=()=>
    {
        setName("Parthiban");
    };
    //change number
    const numHandler=()=>
    {
        let value=num;
        setNum(++value);  
    };
    //change object
    const studentHandler=()=>
    {
        setStudent({name:" Chubramani",age:2});
    };
    return(
        <div>
            <h1>State and Props</h1>
            <hr></hr>
            <h2>Hi {name}</h2>
            <h2>The Number is {num}</h2>
            <h3>Student name is {student.name} and age is {student.age}</h3>
            <button onClick={nameHandler}>Change Name</button>
            <br></br>
            <button onClick={numHandler}>Increment Number</button>
            <br></br>
            <button onClick={studentHandler}>Change Student details</button>
        </div>
    );
}
export default StateProps;