var button = document.getElementById("btn");
const img = ["cine.png","giussani.png","mane.png","albertini.png","berna.png","gianpa.png","monta.png","muggia.png","mussi.png","palu.png","pere.png","petri.png","pompo.png","sartori.png","valsa.png"];
var body = document.body;

function rimbalza(youCanDelete, isButton) {
    function anogoloAltoSinistro(){
        num = Math.floor(Math.random()*2);
        if(num){
            incrementX = Math.random();
            incrementY = 1;
        }else{
            incrementY = Math.random();
            incrementX = 1;
        }
    }
    
    function sopra(){
        let num = Math.floor(Math.random()*2);
        let num1 = Math.floor(Math.random()*2);
        if(num){
            if(num1){
                incrementX = Math.random();
                incrementY = 1;
            }else{
                incrementY = Math.random();
                incrementX = 1;
            }
        }else{
            if(num1){
                incrementX = Math.random() * -1;
                incrementY = 1;
            }else{
                incrementY = Math.random();
                incrementX = -1;
            }
        }
    }
    
    function sotto(){
        let num = Math.floor(Math.random()*2);
        let num1 = Math.floor(Math.random()*2);
        if(num){
            if(num1){
                incrementX = Math.random();
                incrementY = -1;
            }else{
                incrementY = Math.random() * -1;
                incrementX = 1;
            }
        }else{
            if(num1){
                incrementX = Math.random() * -1;
                incrementY = -1;
            }else{
                incrementY = Math.random() * -1;
                incrementX = -1;
            }
        }
    }
    
    function destra(){
        let num = Math.floor(Math.random()*2);
        let num1 = Math.floor(Math.random()*2);
        if(num){
            if(num1){
                incrementX = Math.random() * -1;
                incrementY = -1;
            }else{
                incrementY = Math.random() * -1;
                incrementX = -1;
            }
        }else{
            if(num1){
                incrementX = Math.random() * -1;
                incrementY = 1;
            }else{
                incrementY = Math.random();
                incrementX = -1;
            }
        }
    }
    
    function sinistra(){
        let num = Math.floor(Math.random()*2);
        let num1 = Math.floor(Math.random()*2);
        if(num){
            if(num1){
                incrementX = Math.random();
                incrementY = -1;
            }else{
                incrementY = Math.random() * -1;
                incrementX = 1;
            }
        }else{
            if(num1){
                incrementX = Math.random();
                incrementY = 1;
            }else{
                incrementY = Math.random();
                incrementX = 1;
            }
        }
    }

    function ellimination(){
        body.removeChild(square);
    }

    function setNewValues(){
        width = window.innerWidth - square.clientWidth;
        height = window.innerHeight - square.clientHeight;
        console.log("ciao");
    }

    function setDefaultValuesAndAppendSquare(){
        square.style.width = "250px";
        square.style.height = "250px";
        square.style.position = "absolute";
        square.style.borderRadius = "50%";
        let numRand = Math.floor(Math.random()*img.length);
        square.src = "img/" + img[numRand];
        if(youCanDelete && img[numRand] != "valsa.png"){
            square.addEventListener("click", ellimination);
        }
        if(img[numRand] == "valsa.png"){
            square.style.zindex = "100";
        }else{
            square.style.zindex = "0";
        }
        body.appendChild(square);
    }
    var square;
    button.innerHTML = "add";
    let posX = 0;
    let posY = 0;
    if(!isButton){
        square = document.createElement("img");
        setDefaultValuesAndAppendSquare();
    }else{
        square = document.getElementById("btn");
    }
    window.onresize = setNewValues;
    let width = window.innerWidth - square.clientWidth;
    let height = window.innerHeight - square.clientHeight;
    let incrementX;
    let incrementY;
    setInterval(frame, 5);
    function frame() {
        if(posX == 0 && posY == 0){
            anogoloAltoSinistro();
        }else if(posX >= width){
            destra();
        }else if(posX <= 0){
            sinistra();
        }else if(posY >= height){
            sotto();
        }else if(posY <= 0){
            sopra();
        }
        posX+=incrementX;
        posY+=incrementY;
        square.style.left = posX + "px";
        square.style.top = posY + "px";
    }
}

rimbalza(false,true);