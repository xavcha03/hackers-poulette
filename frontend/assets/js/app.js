import * as inputErrorMsg  from "./modules/inputErrorMessage.js";
//Récupération des inputs

let firstName = document.querySelector("#firstName");
let lastNameElt = document.querySelector("#lastName");
let emailElt = document.querySelector("#email");
let picturesElt = document.querySelector("#pictures");
let descriptionElt = document.querySelector("#description");



firstName.addEventListener("keyup", e=>{
    
    var regName = /^[a-zA-Z]+$/;
    let name = e.target.value;
    if(!regName.test(name)){
        inputErrorMsg.open(e.target,"Le prénom ne peut contenir de chiffres ou de caractères spéciaux")
    }else{
        //hiddeInputErrorMsg(e.target);
    }
})
