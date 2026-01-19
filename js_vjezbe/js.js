
let plava = false;

function changeColor(){
    if(plava){
        document.body.style.backgroundColor="red";
        plava=false;
    }
    else{
        document.body.style.backgroundColor="blue";
        plava=true;
    }
}