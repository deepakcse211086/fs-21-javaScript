let data = [];
let fname = document.querySelector(".fname");
let lname = document.querySelector(".lname");
let pcountry = document.querySelector(".country");
let pscore = document.querySelector(".fname");
let button = document.querySelector("button");

button.addEventListener(`click`, function(e){
    e.preventDefault();

    if(lname.value==="" || fname.value==="" || pcountry.value==="" || pscore.value===""){
        alert("please fill all the fields");
    }else{
        let playerObj = {
            fname: fname.value,
            lname: lname.value,
            country: pcountry.value,
            score: pscore.value
        }
        data.push(playerObj);
        updateDataOnUI();
        console.log(data);
    }
})