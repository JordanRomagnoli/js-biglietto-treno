let userKm = prompt('Quanti chilometri dovrai percorrere ?');
console.log("I km che dovrà fare l'utente sono : " + userKm);

if (isNaN(userKm)){
    alert("inserisci un valore valido");
};

const priceForKm = (0.21 * parseInt(userKm));


let userPrice = (priceForKm).toFixed(2);
console.log("Il prezzo per l'utente è : " + userPrice);

// ------------------------------------------------------------------ OK

let userAge = prompt('Quanti anni hai ?');
console.log("l'età dell'utente è : " + userAge);

if (isNaN(userAge)){
    alert("inserisci un valore valido");
};

// ------------------------------------------------------------------ OK


let discount20 = ((parseInt(userPrice) * 20) / 100);

let discount40 = ((parseInt(userPrice) * 40) / 100);


// ------------------------------------------------------------------ OK


let userPriceUnder18

if (userAge < 18){
    userPriceUnder18 = (parseInt(userPrice) - parseInt(discount20));
};

console.log("Il prezzo per l'utente under 18 è : " + userPriceUnder18);


let userPriceOver65;

if (userAge > 65){
    userPriceOver65 = (parseInt(userPrice) - parseInt(discount40));
};

console.log("Il prezzo per l'utente over 65 è : " + userPriceOver65);