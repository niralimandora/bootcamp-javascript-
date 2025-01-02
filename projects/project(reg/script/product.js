let arr = JSON.parse(localStorage.getItem("products")) || []


document.getElementById("box").innerHTML = view(arr)

function view(arr){
    return arr.map((el)=>{
        return `<div id="hello">
        <div>
          <img src="${el.image}" alt="${el.title}" width="150px">
        </div>
        <div>
          <h3>${el.title}</h3>
          <p>${el.price} - ${el.des}</p>
        </div></div>`
     }).join("")
}