var button = document.getElementById("btn");
var container = document.getElementById("container");
var porconi = document.getElementById("porconi");
var h1Risultato = document.getElementById("risultato");
var h1ElementiBianchi = document.getElementById("elementiBianchi");
var h1ElementiNeri = document.getElementById("elementiNeri");
let elementi = 0;
let elementiBianchi = 0;
let elementiNeri = 0;
let quantitaElementi = 0;
const img = ["berna.png","gianpa.png"];
const insulti = ["Dioporco via dal cazzo","Cazzo mi fai perdere la pausa mannaggia la madonna","Tu ti scopi mia moglie io mi scopo tua sorella","Berna 1 Vicedirettore 0", "Porcoddio ma ti levi dal cazzo?"];

function rimbalza() {
    h1Risultato.innerHTML = "";
    const music = new Audio('porcodio.mp3');
    function play(){
        music.play();
        music.loop =false;
        music.playbackRate = 1;
    }

    function finePartita(vittoria){
        if(vittoria){
            window.location.href = "vittoria.html";
        }else{
            window.location.href = "sconfitta.html";
        }
        elementi = 0;
        elementiBianchi = 0;
        elementiNeri = 0;
        quantitaElementi = 0;
        while(container.hasChildNodes()){
            container.removeChild(container.firstChild);
        }
        while(porconi.hasChildNodes()){
            porconi.removeChild(porconi.firstChild);
        }
        button.disabled = true;
        setTimeout(function(){button.disabled = false},2000);
        button.innerHTML = "restart";
        clearInterval(id);
    }

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
        container.removeChild(square);
        button.disabled = false;
        quantitaElementi--;
        let num = Math.floor(Math.random()*5);
        porconi.innerHTML += "<p>" + insulti[num] + "</p>";
    }

    function setDefaultValuesAndAppendSquare(){
        square.style.width = "120px";
        square.style.height = "120px";
        square.style.position = "absolute";
        square.style.borderRadius = "50%";
        let numRandColore = Math.floor(Math.random()*2);
        if(numRandColore){
            square.src = "img/" + img[numRandColore];
            elementiBianchi++;
            elementi++;
            quantitaElementi++;
            square.addEventListener("click",ellimination);
            h1ElementiNeri.innerHTML = "Vicedirettori cagati fuori: " + elementiBianchi;
            if(elementiBianchi >= 11){
                finePartita(false);
            }else{
                container.appendChild(square);
            }
        }else{
            square.src = "img/" + img[numRandColore];
            elementiNeri++;
            elementi++;
            quantitaElementi++;
            h1ElementiBianchi.innerHTML = "Berna cagati fuori: " + elementiNeri;
            if(elementiNeri >= 10){
                finePartita(true);
            }else{
                container.appendChild(square);
            }
        }
    }

    button.innerHTML = "add";
    let id;
    let posX = 0;
    let posY = 0;
    var square = document.createElement("img");
    setDefaultValuesAndAppendSquare();

    if(quantitaElementi >= 10){
        button.disabled = true;
    }

    let width = container.clientWidth - square.clientWidth;
    let height = container.clientHeight - square.clientHeight;
    id = setInterval(frame, 5);
    let incrementX;
    let incrementY;
    function frame() {
        if(posX == 0 && posY == 0){
            anogoloAltoSinistro();
        }else if(posX >= width){
            play();
            destra();
        }else if(posX <= 0){
            play();
            sinistra();
        }else if(posY >= height){
            play();
            sotto();
        }else if(posY <= 0){
            play();
            sopra();
        }
        posX+=incrementX;
        posY+=incrementY;
        square.style.left = posX + "px";
        square.style.top = posY + "px";
    }
}
