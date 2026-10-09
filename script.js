console.log("JS geladen ✔");

// Titel tijdelijk groen maken
const maakTitelGroen = () => {
    const titel = document.querySelector("h1");
    titel.style.color = "green";
};
maakTitelGroen();

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
        "De inhoud van de snoepenketel is: " + resultaat;
}
toonInhoud();

// -Toggle button kleur
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click",function () {
    colorBtn.classList.toggle("actief");
});

// - Paragraaf togglen
function toggleParagraph() {
    const p = document.getElementById("paragraph");
    p.classList.toggle("paragraph-style");
       
    if(p.innerHTML === "They are waiting for you...👻"){
        p.innerHTML =  "TOO LATE!!!👻👻👻";
        
    }else{
        p.innerHTML = "They are waiting for you...👻";
       
    }

}


const button= document.getElementById("toggleParagraphBtn");
button.addEventListener("click", function(){
toggleParagraph();
});  
    


// -Accent togglen op h2
const accentBtn = document.getElementById("accentBtn");
accentBtn.addEventListener("click", () => {
    const koppen = document.querySelectorAll("h2");
    koppen.forEach(kop => kop.classList.toggle("accent"));
});

// -Dark mode
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// -Puff-effect
const puffContainer = document.querySelector(".puff-container");

function startPuff() {
    puffContainer.classList.add("puff-active");
}

// -Scroll-trigger via IntersectionObserver
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startPuff();
        }
    });
});
if (puffContainer){
    observer.observe(puffContainer);
}


// -Dagen tot Halloween
const dagenBtn = document.getElementById("dagenBtn");
const halloweenTekst = document.getElementById("dagenText");

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

console.log("dagenBtn =", dagenBtn);
console.log("halloweenTekst =", halloweenTekst);

// - Halloween muziek
const musicBtn = document.getElementById("musicBtn");
const halloweenMusic = document.getElementById("halloweenMusic");

halloweenMusic.volume = 0.3;

musicBtn.addEventListener("click", () => {

    if (halloweenMusic.paused) {

        halloweenMusic.play();

        musicBtn.textContent = "🔇 Stop Spooky Music 👻";

    } else {

        halloweenMusic.pause();

        musicBtn.textContent = "🎵 Play Spooky Music 👻";
    }

});
/*
🎃 CANDY BAG CONFIGURATOR - TESTVERSLAG


Test 1: Aantal = 0
Verwacht: Foutmelding minimaal 1 snoepzakje
Resultaat: GESLAAGD

Test 2: Aantal = 11
Verwacht: Foutmelding maximaal 10 snoepzakjes
Resultaat: GESLAAGD

Test 3: Aantalveld leeg
Verwacht: Foutmelding aantal invullen
Resultaat: GESLAAGD

Test 4: Aantal = 2.5
Verwacht: Foutmelding heel getal invullen
Resultaat: GESLAAGD

Test 5: Aantal = 5
Verwacht: Geen foutmelding (null)
Resultaat: GESLAAGD

Test 6: Spooky, aantal 3, verrassing aan
Verwacht: € 12 + € 2 = € 14
Resultaat: GESLAAGD

Test 7: Spooky, aantal 5, verrassing aan
Verwacht: € 20, verrassing gratis
Resultaat: GESLAAGD

Test 8: Normal, aantal 10, verrassing uit
Verwacht: € 30
Resultaat: GESLAAGD

Extra controles:
- Confirm weigert een leeg aantalveld: GESLAAGD
- Reset herstelt de beginwaarden: GESLAAGD
- Bonnetje verandert automatisch: GESLAAGD
========================================
*/


