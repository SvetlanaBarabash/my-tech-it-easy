//Opdracht 2 - Elementen in de DOM plaatsen
//Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!

//Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
let totalSoldTvs = null
for(let i = 0; i < inventory.length; i++ ) {
    totalSoldTvs = totalSoldTvs + inventory[i].sold
}

console.log(totalSoldTvs);



//Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.




//Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let totalBoughtTvs = null

for (let i = 0; i < inventory.length; i++ ) {
    totalBoughtTvs += inventory[i].originalStock
}

console.log(totalBoughtTvs);

//Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.



//Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.



container.innerHTML = `
    <p>Total sold tv's: <span class="sold-items">${totalSoldTvs}</span></p>
    <p>Total bougth tv's: <span class="bought-items">${totalBoughtTvs}</span></p>
    <p>Total inventory: <span class="inventory">${totalBoughtTvs - totalSoldTvs}</span></p>
`
