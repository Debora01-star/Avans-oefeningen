console.log("js werkt!");

//1- h1 tijdelijk groen maken

const maakTitelGroen = () => {
    color: "green";
    console.log("h1 is groen gemaakt");    
}
maakTitelGroen(); // functie direct aanroepen

//2-Afbeelding rechtop- draaien

function zetRechtop(){
    console.log("zetRechtop");//test in console
    const foto= document.getElementById("foto");
    foto.classList.remove("rotate180");
}

function draai180(){
    console.log("draai180");//test in console
    const foto= document.getElementById("foto");
    foto.classList.add("rotate180");
}
//knoppen koppelen
document.getElementById("rechtopBtn").onclick= zetRechtop;
document.getElementById("draaiBtn").onclick= draai180;  


//3-Om de balk te bereken 

function inhoudBalk(l, b, h){
    return l*b *h;
}
function toonInhoud(){
    const resultaat= inhoudBalk(8, 3, 2);
        document.getElementById("inhoudResultaat").innerText=
         "De inhoud van de balk is:" + resultaat;   
}
// functie direct uitvoeren
toonInhoud();


