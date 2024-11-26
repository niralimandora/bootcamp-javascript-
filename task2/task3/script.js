function main()
{
    let cl=document.getElementById("ac").value;
    console.log(cl);

    switch (cl)
    {
        case "red":
            document.getElementById("result").innerHTML="Stop the vehicle";
            break;
        case "yellow":
            document.getElementById("result").innerHTML="get ready to start the vehicle";
            break;
        case "green":
            document.getElementById("result").innerHTML="get to Go !!!";
            break;
        default:
            document.getElementById("it's not the traffic light color");
            break;
    }
}