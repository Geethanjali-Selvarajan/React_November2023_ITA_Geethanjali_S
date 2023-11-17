import {useState} from "react";
function ToggleMessage()
{
    const[showMessage,setShowMessage]=useState(false);

    const Togglemessage=()=>{
        setShowMessage(!showMessage);
    };
    return(
        <div>
            <h1>Dashboard</h1>
            <hr></hr>
            <button onClick={Togglemessage}>{showMessage ? "Show Message":"Hide Message"}</button>
            {showMessage && <p>Hi!! How are you??</p>}
        </div>
    );
}
export default ToggleMessage;