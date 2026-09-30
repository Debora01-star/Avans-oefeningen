
const filterButtons = document.querySelectorAll(".filter-buttons button");

const gameCards = document.querySelectorAll(".game-card");
console.log("Aantal kaarten:", gameCards.length);

const filterStatus = document.getElementById("filterStatus");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const gekozenFilter = button.dataset.filter;

        filterButtons.forEach((btn) => {//gaat bij alle 4 knopen en verwijdert de active
    btn.classList.remove("active");
});

button.classList.add("active");//geeft active aan de enige geklikte knop

        let zichtbaarAantal = 0;

         gameCards.forEach((card) => {// gaat bij iedere kaart langs

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

        filterStatus.textContent =
        "😱 No Halloween games found!";

    } else {

        filterStatus.textContent =
        zichtbaarAantal + " games found";
} 

});

});
