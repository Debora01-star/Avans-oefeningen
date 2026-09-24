console.log("JS geladen ✔");

// Titel tijdelijk groen maken
const maakTitelGroen = () => {
    const titel = document.querySelector("h1");
    titel.style.color = "green";
};
maakTitelGroen();

// Afbeelding draaien
//const foto= document.getElementById("afbeelding");
//const draaiPicBtn= document.getElementById("draaiPicBtn");

//draaiPicBtn.addEventListener("click", function(){
    //console.log("button is geklikt");
    //foto.classList.toggle("gedraaid");

//});
// Afbeelding draaien
//function draaiAfbeelding() {
 //   const foto = document.getElementById("foto");
   // foto.classList.toggle("gedraaid");
//}

//const draaiPicBtn = document.getElementById("draaiPicBtn");

//draaiPicBtn.addEventListener("click", function () {
 //   draaiAfbeelding();
//});

//test 200000 pfff
//const foto = document.getElementById("foto");
//const knop = document.getElementById("draaiPicBtn");

//knop.onclick = function () {
 //   foto.style.transform = "rotate(180deg)";
//};


//document.getElementById("draaiBtn").addEventListener("click", () => {
 //   const foto = document.getElementById("foto");
 //   foto.classList.remove("rotate0");
   // foto.classList.add("rotate180");
//});
//document.getElementById("rechtopBtn").addEventListener("click", () => {
    //const foto = document.getElementById("foto");
   // foto.classList.remove("rotate180");
   // foto.classList.add("rotate0");
//});


//function functie2 (){
   // document.querySelector(".foto").classList.add(".rotate180")

//}
//function draaiPicBtn (){
  //  document.querySelector(".foto").classList.add(".rotate180");
   // classList.remove(".rotate0");

//}

function zetRechtop() {
    const foto = document.getElementById("foto");
    foto.classList.remove("rotate180");
    foto.classList.add("rotate0");
}

function draai180() {
    const foto = document.getElementById("foto");
    foto.classList.remove("rotate0");
    foto.classList.add("rotate180");
}

document.getElementById("rechtopBtn").onclick = zetRechtop;
document.getElementById("draaiBtn").onclick = draai180;

// Inhoud van balk
function inhoudBalk(l, b, h) {
    return l * b * h;
}

function toonInhoud() {
    const resultaat = inhoudBalk(8, 3, 2);
    document.getElementById("inhoudResultaat").innerText =
        "De inhoud van de balk is: " + resultaat;
}
toonInhoud();

// Toggle button kleur
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click",function () {
    colorBtn.classList.toggle("actief");
});

// 5 - Paragraaf togglen
function toggleParagraph() {
    const p = document.getElementById("paragraph");
    p.classList.toggle("paragraph-style");
}

const button= document.getElementById("toggleParagraphBtn");
button.addEventListener("click", function(){
toggleParagraph();
});  
    


// Accent togglen op h2
const accentBtn = document.getElementById("accentBtn");
accentBtn.addEventListener("click", () => {
    const koppen = document.querySelectorAll("h2");
    koppen.forEach(kop => kop.classList.toggle("accent"));
});

// Dark mode
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Puff-effect
const puffContainer = document.querySelector(".puff-container");

function startPuff() {
    puffContainer.classList.add("puff-active");
}

// Scroll-trigger via IntersectionObserver
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startPuff();
        }
    });
});

observer.observe(puffContainer);

// Dagen tot Halloween
const dagenBtn = document.getElementById("dagenBtn");
const halloweenTekst = document.getElementById("Halloween");

dagenBtn.addEventListener("click", () => {
    const vandaag = new Date();
    const halloween = new Date(vandaag.getFullYear(), 9, 31);

    if (vandaag > halloween) {
        halloween.setFullYear(halloween.getFullYear() + 1);
    }

    const verschil = halloween - vandaag;
    const dagen = Math.ceil(verschil / (1000 * 60 * 60 * 24));

    halloweenTekst.textContent = `Aantal dagen tot Halloween: ${dagen}`;
});


