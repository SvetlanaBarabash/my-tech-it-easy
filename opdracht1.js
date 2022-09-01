

//Opdracht 1 - Array Methoden


//Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.

const type = inventory.map((tv ) => {
    return tv.type;
})
console.log(type);

//Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.

const soldOutItems = inventory.filter((tv) => {
    if (tv.originalStock - tv.sold === 0) {
        return tv;
    }
})
console.log(soldOutItems);

//Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

const tvsWithAmbiLight = inventory.filter((tv) => {
    if (tv.options.ambiLight === true) {
        return tv;
    }
})
console.log(tvsWithAmbiLight);

//Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.*/

sortedInventory = inventory.map((tv) => {
    return tv;
});

sortedInventory.sort((a,b) => {
    return a.price - b.price;
})
    console.log(sortedInventory);
    console.log(inventory);