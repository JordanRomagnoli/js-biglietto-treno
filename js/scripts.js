let userKm = prompt('Quanti chilometri dovrai percorrere ?');
console.log("I km che dovrà fare l'utente sono : " + userKm);

if (isNaN(userKm)){
    alert("inserisci un valore valido");
};

const priceForKm = (0.21 * userKm);


let userPrice = (priceForKm).toFixed(2);
console.log("Il prezzo per l'utente è : " + userPrice);

// ------------------------------------------------------------------ OK

let userAge = parseInt(prompt('Quanti anni hai ?'));
console.log("l'età dell'utente è : " + userAge, typeof userAge);

if (isNaN(userAge)){
    alert("inserisci un valore valido");
};

// ------------------------------------------------------------------ OK


let discount20 = (((userPrice) * 20) / 100);

let discount40 = (((userPrice) * 40) / 100);


// ------------------------------------------------------------------ OK


let userPriceUnder18;
let userPriceOver65;

if (userAge < 18){

    userPriceUnder18 = ((userPrice) - (discount20)).toFixed(2);

}else if ((userAge > 65)) {

    userPriceOver65 = ((userPrice) - (discount40)).toFixed(2);
}

console.log("Il prezzo per l'utente under 18 è : " + userPriceUnder18);

console.log("Il prezzo per l'utente over 65 è : " + userPriceOver65);

// ------------------------------------------------------------------ OK


 if (userAge < 18){
     document.getElementById('user-price').innerHTML = ` ${userPriceUnder18}€ `;
}

else if (userAge > 65){
    document.getElementById('user-price').innerHTML = ` ${userPriceOver65}€ `;
}

else if (userAge >= 18){
    document.getElementById('user-price').innerHTML = ` ${userPrice}€ `;
};

// ------------------------------------------------------------------ OK

