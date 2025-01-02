let arr = JSON.parse(localStorage.getItem("products")) || []

document.getElementById("addProduct").addEventListener("submit",(e)=>{
    e.preventDefault()
    let title = document.getElementById("title")
    let obj = {
        title : title.value,
        image : document.getElementById("image").value,
        price : document.getElementById("price").value,
        des : document.getElementById("description").value
    }
    arr.push(obj)
    localStorage.setItem("products",JSON.stringify(arr))
    title.value = ""
    document.getElementById("image").value = ""
    document.getElementById("price").value = ""
    document.getElementById("description").value = ""
});