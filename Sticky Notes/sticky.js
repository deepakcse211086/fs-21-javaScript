let btn = document.getElementById("button");
let text = document.getElementById("")

function addNotes(){
    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");
    
    div.appendChild(p);
    div.appendChild(cross_btn);


    cross_btn.innerText = "X";
    p.innerText = text.value;

    console.log(div);
}

btn.addEventListener("click", addNotes);