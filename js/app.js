/*
exo01

let input = document.querySelector('input');

input.onkeydown = (event)=>{    
    let touch = event.key;
    console.log(touch);
    if(touch == "Enter"){
        input.value = "";
    }
}
*/

let boutons = document.querySelectorAll("button");

for(i=0;i<boutons.length;i++){
    boutons[i].addEventListener("click", ()=>{
        let cible = event.toElement;
        console.log(cible);
        console.log(cible.parentNode);
    });
}

