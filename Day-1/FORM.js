function clickevent()
{
    var name=document.getElementById("name").value;
    document.write("Hi "+name);
}
function clickevent1()
{
    var first=document.getElementById("first").value;
    var Second=document.getElementById("Second").value;
 
    if(first>Second)
    {
        document.write(first+" is largest than "+Second);
    }
    else{
        document.write(Second+" is largest than "+first);
        
    }
    
}