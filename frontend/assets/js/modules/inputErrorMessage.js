export function open(target, message){
    console.log(target, message);
    let errorElt = document.createElement("div");
    errorElt.classList.add("errorMsg");
    errorElt.innerHTML = message;
    target.insertAdjacentElement('afterend', errorElt);

}