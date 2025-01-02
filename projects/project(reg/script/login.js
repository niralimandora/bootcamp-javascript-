let arr =  JSON.parse(localStorage.getItem("users")) || []

document.getElementById("register").addEventListener("submit",(el)=>{
      el.preventDefault()
      let loginemail = document.getElementById("email").value
      let loginpass = document.getElementById("password").value
      
     let a =  arr.filter(element => {
          if(element.email == loginemail){
             return el;
          }
      });
      if(a.length == 0){
         alert("Email Not Registered")
      }else{
          if(a[0].password == loginpass){
             alert("Login Successfull")
             window.location.href = "addProduct.html"
          }else{
             alert("Password Wrong")
          }
      }
})