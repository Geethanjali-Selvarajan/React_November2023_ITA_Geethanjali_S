import React from "react";
const Styling=()=>{
    const pstyle={
        backgroundColor:"lightblue",
        color:"darkblue",
        fontSize:"16px",
    }
    const dstyle={
        backgroundColor:"lightblue",
        color:"darkblue",
        padding:"10px",
        borderStyle: "solid",
        borderWidth:"1px    ",
        borderColor: "blue",
        borderRadius:"5px",
        
            
         
                  
    }
    return(
        <div style={dstyle}>
            <h2 style={{color:"green"}}>Inline Style in JSX Example</h2>
            <p style={pstyle}>This is a paragraph with inline styling </p>
        </div>
    );
}
export default Styling;