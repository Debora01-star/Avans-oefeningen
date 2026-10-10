
const filterButtons = document.querySelectorAll(".filter-buttons button");
// Week 6 - Halloween-games als objecten in een array
const spookyGames = [
    {
        titel: "👻 Haunted House",
        beschrijving: "Enter the haunted house... if you dare! What is hiding in the darkness?",
        extra: "spooky"
    },
    {
        titel: "🕯️ Ghost Hunt",
        beschrijving: "Search for restless ghosts hiding in the darkness. Will you find them before they find you?",
        extra: "spooky"
    },
    {
        titel: "⚰️ Graveyard Tour",
        beschrijving: "Take a creepy walk through the graveyard and discover what awakens after midnight.",
        extra: "spooky"
    }
];
// Week 6 - Maak één Halloween-gamekaart
function maakGameKaart(game) {

    const artikel = document.createElement("article");
    artikel.classList.add("game-card");
    artikel.dataset.category = game.extra;

    const titel = document.createElement("h3");
    titel.textContent = game.titel;

    const beschrijving = document.createElement("p");
    beschrijving.textContent = game.beschrijving;

    const categorie = document.createElement("p");
    categorie.textContent = "Category: " + game.extra;

    artikel.appendChild(titel);
    artikel.appendChild(beschrijving);
    artikel.appendChild(categorie);

    return artikel;
}
// Week 6 - Toon alle Spooky-gamekaarten
const spookyList = document.getElementById("spookyList");

spookyGames.forEach((game) => {
    const kaart = maakGameKaart(game);
    spookyList.appendChild(kaart);
});
const gameCards = document.querySelectorAll(".game-card");

const filterStatus = document.getElementById("filterStatus");
function filterGames(gekozenFilter) {
    
    let zichtbaarAantal = 0; //onderdeel van de functie 

    gameCards.forEach((card) => {

        const categorie = card.dataset.category;// we lezen bijv.bij Haunted House spooky
        //console.log("filter:", gekozenFilter,"kaart", categorie);

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

//console.log(berekenenPrijs(prijsSnoepzakje, aantalSnoepzakjes));
//console.log(berekenenPrijs(3, 3));
//console.log(berekenenPrijs(3, 7));

const resultaat = berekenenPrijs(prijsSnoepzakje, aantalSnoepzakjes);
document.getElementById("prijsResultaat").textContent = "€ " + resultaat.toFixed(2);

const addCandyBtn = document.getElementById("addCandyBtn");
const candyDialog = document.getElementById("candyDialog");
addCandyBtn.addEventListener("click", function () {
    candyDialog.showModal();// Open the dialog when the button is clicked
    toonSamenvatting();

    document.getElementById("aantalResultaat").textContent = aantalSnoepzakjes;
const nieuwePrijs = berekenenPrijs(prijsSnoepzakje, aantalSnoepzakjes);

document.getElementById("prijsResultaat").textContent = "€ " + nieuwePrijs.toFixed(2);

});


const resetCandyBtn = document.getElementById("resetCandyBtn");

resetCandyBtn.addEventListener("click", function () {
    aantalSnoepzakjes = 1;

    document.getElementById("aantalResultaat").textContent = aantalSnoepzakjes;

    const resetPrijs = berekenenPrijs(prijsSnoepzakje, aantalSnoepzakjes);

    document.getElementById("prijsResultaat").textContent = "€ " + resetPrijs.toFixed(2);

    candyType.value = "normal";
    candyAmount.value = 1;
    candySurprise.checked = false;

    toonSamenvatting();

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

const closeCandyBtn = document.getElementById("closeCandyBtn");

closeCandyBtn.addEventListener("click", function () {
    candyDialog.close();
});

const candyType = document.getElementById("candyType");

const candyAmount = document.getElementById("candyAmount");

const candySurprise = document.getElementById("candySurprise");

function leesInvoer() {
    const soort = candyType.value;//value leest de optie de bezoeker heeft gekozen
    const aantal = Number(candyAmount.value);
    const leeg = candyAmount.value === "";
    const verrassing = candySurprise.checked;

    return { soort, aantal, leeg, verrassing };
}
//console.log(leesInvoer());

function controleerInvoer(invoer) {
    if (invoer.leeg) {
    return "⚠️ Please enter the number of candy bags!";
}
    if (invoer.aantal < 1) {
        return "⚠️ Choose at least 1 candy bag!";
}
    if (invoer.aantal > 10) {
    return "⚠️ Choose a maximum of 10 candy bags!";
}
    if (!Number.isInteger(invoer.aantal)) {
    return "⚠️ Please enter a whole number!";
}
    return null;//geen foutmelding gevonden
}

function berekenUitkomst(invoer) {
    const prijs = invoer.soort === "spooky" ? 4 : 3;//ternary operator, controleer gekozen soort en alsspooky is, kost 4 anders kost 3
    const basisPrijs = prijs * invoer.aantal;//basisprijs omdat nog geen halloween surprise erbij zit

    let surprisePrijs = 0;

    if (invoer.verrassing === true) {
    surprisePrijs = 2;
}
    if (invoer.aantal >= 5 && invoer.verrassing === true) {
    surprisePrijs = 0;
}
    const totaalPrijs =basisPrijs + surprisePrijs;
    return { basisPrijs, surprisePrijs, totaalPrijs };
}

const candyBonnetje = document.getElementById("candyBonnetje");

function toonSamenvatting() {
    const invoer = leesInvoer();
    const foutmelding = controleerInvoer(invoer);

    if (foutmelding !== null) {
        candyBonnetje.textContent = foutmelding;
        return;
    }

    const uitkomst = berekenUitkomst(invoer);

    let bericht = "🍬 " + invoer.aantal + " " + invoer.soort +
        " Candy Bag(s) | Total: € " + uitkomst.totaalPrijs.toFixed(2);

    if (invoer.verrassing && invoer.aantal >= 5) {
        bericht += " 🎁 FREE Halloween Surprise!";
    } else if (invoer.verrassing) {
        bericht += " 🎁 Halloween Surprise: € 2,00";
    }

    if (invoer.soort === "spooky" && invoer.verrassing) {
        bericht += " 👻 BOOO! You've unlocked a spooky surprise!";
    }

    candyBonnetje.textContent = bericht;
}

candyType.addEventListener("change", toonSamenvatting);//change reageert wanneer een snoepsoort is gekozen
candyAmount.addEventListener("input", toonSamenvatting);//input reageert terwijl de aantal snoepen verandert
candySurprise.addEventListener("change", toonSamenvatting);// checked zoek checkbox in html,change controleert als het aangevinkt is

const confirmCandyBtn = document.getElementById("confirmCandyBtn");

confirmCandyBtn.addEventListener("click", function () {
    const invoer = leesInvoer();
    const foutmelding = controleerInvoer(invoer);

    if (foutmelding !== null) {
        candyBonnetje.textContent = foutmelding;
        return;
    }

    const uitkomst = berekenUitkomst(invoer);

    aantalSnoepzakjes = invoer.aantal;

    document.getElementById("aantalResultaat").textContent =
        aantalSnoepzakjes;

    document.getElementById("prijsResultaat").textContent =
        "€ " + uitkomst.totaalPrijs.toFixed(2);

    candyDialog.close();
});