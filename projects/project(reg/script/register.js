let arr =  JSON.parse(localStorage.getItem("users")) || []
document.getElementById("register").addEventListener("submit",(el)=>{
     el.preventDefault()

     let obj = {
        username : document.getElementById("username").value, 
        email : document.getElementById("email").value,
        password : document.getElementById("password").value
     }
     arr.push(obj)
     console.log(arr)
     localStorage.setItem("users" , JSON.stringify(arr))
     alert("Reigestered Successfully")
     window.location.href = "login.html"
})