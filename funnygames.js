
const filterButtons = document.querySelectorAll(".filter-buttons button");

const gameCards = document.querySelectorAll(".game-card");
console.log("Aantal kaarten:", gameCards.length);

const filterStatus = document.getElementById("filterStatus");
function filterGames(gekozenFilter) {
    
    let zichtbaarAantal = 0; //onderdeel van de functie 

    gameCards.forEach((card) => {

        const categorie = card.dataset.category;// we lezen bijv.bij Haunted House spooky
        console.log("filter:", gekozenFilter,"kaart", categorie);

         if (gekozenFilter === "all" || categorie === gekozenFilter) {//is de gekozen filter all of de categorie van het gekozen filter
            card.style.display = "block";
            zichtbaarAantal++;

        } else {
            card.style.display = "none";
        }

    });


    if (zichtbaarAantal === 0) {

        filterStatus.textContent = "😱 No Halloween games found!";

    } else {

        filterStatus.textContent = zichtbaarAantal + " games found";
    } 
}

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

    const gekozenFilter = button.dataset.filter;

    filterButtons.forEach((btn) => {//gaat bij alle 4 knopen en verwijdert de active
        btn.classList.remove("active");
    });

    button.classList.add("active");//geeft active aan de enige geklikte knop

    filterGames(gekozenFilter);//start de filter functie met de gekozen filter als parameter(treats bijvoorbeeld)

    });

});

const prijsSnoepzakje = 3;
let aantalSnoepzakjes = 1;

function berekenenPrijs(prijs, aantal) {
    return prijs * aantal;
}

console.log(berekenenPrijs(prijsSnoepzakje, aantalSnoepzakjes));
console.log(berekenenPrijs(3, 3));
console.log(berekenenPrijs(3, 7));

const resultaat = berekenenPrijs(prijsSnoepzakje, aantalSnoepzakjes);
document.getElementById("prijsResultaat").textContent = "€ " + resultaat.toFixed(2);
const addCandyBtn = document.getElementById("addCandyBtn");

addCandyBtn.addEventListener("click", function () {
    aantalSnoepzakjes++;

    document.getElementById("aantalResultaat").textContent = aantalSnoepzakjes;
const nieuwePrijs = berekenenPrijs(prijsSnoepzakje, aantalSnoepzakjes);

document.getElementById("prijsResultaat").textContent = "€ " + nieuwePrijs.toFixed(2);

const resetCandyBtn = document.getElementById("resetCandyBtn");

resetCandyBtn.addEventListener("click", function () {
    aantalSnoepzakjes = 1;

    document.getElementById("aantalResultaat").textContent = aantalSnoepzakjes;

    const resetPrijs = berekenenPrijs(prijsSnoepzakje, aantalSnoepzakjes);

    document.getElementById("prijsResultaat").textContent = "€ " + resetPrijs.toFixed(2);
});

});

const scareBtn = document.getElementById("scareBtn");

scareBtn.addEventListener("click", function () {
  const invoer = document.getElementById("scareLevel").value;   
  const scareLevel = Number(document.getElementById("scareLevel").value);
  const scareResultaat = document.getElementById("scareResultaat");

    if (invoer === "" || scareLevel < 1 || scareLevel > 10) {
    scareResultaat.innerHTML = "⚠️ Enter a number between 1 and 10!";

    } else if (scareLevel <= 3) {
        filterGames("treats");
        scareResultaat.innerHTML = "🍬 Treats! You're playing it safe!";
    } else if (scareLevel <= 7) {
        filterGames("fun")
        scareResultaat.innerHTML = "🎃 Fun! You're pretty brave!";
    } else {
        filterGames("spooky");
        scareResultaat.innerHTML = "👻 Spooky! You're fearless!";
    }
});
