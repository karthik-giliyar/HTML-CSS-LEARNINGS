const harryPotter = async()=>{
    let res = await fetch("https://hp-api.herokuapp.com/api/characters");
    let response = await res.json();
    slider(response)
}
harryPotter()

let container = document.getElementsByClassName("container")[0]
let flick = document.getElementsByClassName("flick")[0]
let carousel = document.getElementsByClassName("carousel")[0]





function slider(response){
    let results = response;
    let data = "";
    let totalData = "";
    

    results.forEach(element => {
        data = `<div class="slider">
        <h3>Harry Potter</h3>
        <img src="${element.image}" alt="img">
        <h3>${element.name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quas.</p>
    </div>`

    totalData += data
    });

    container.innerHTML = totalData;


}

