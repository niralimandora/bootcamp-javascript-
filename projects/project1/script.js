let a =0;
document.querySelector("#inc").addEventListener("click",()=>{
    a=a+1;
    if(a<=0)
    {
        document.querySelector("#dec").disabled = true;
    }
    else{
        document.querySelector("#dec").disabled = false;
    }
    document.querySelector("#counter").innerHTML = a;
})
document.querySelector("#dec").addEventListener("click",()=>{
    a=a-1
    if(a<=0)
    {
        document.querySelector("#dec").disabled = true;
    }
    else{
        document.querySelector("#dec").disabled = false;
    }
    document.querySelector("#counter").innerHTML = a;
})
