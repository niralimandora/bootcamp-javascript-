function next() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((res) => {
            console.log(res)
            document.getElementById("box").innerHTML=nex(res)
        })
}
 function nex(res){
        return `<div>
            <img src="${res.message}" alt="" width=300px>
        </div>`
}