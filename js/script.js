// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati (tadaaa!)
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero
//  alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o
// raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.
var numeriPc = [];
var i;
var randomIndex;
var numeroInserito = prompt('inserisci un numero da 1 a 100 fino a quando non vinci');

function randomNumber(min, max) {
  var random = Math.floor( Math.random() * (max - min +1) ) + min;
  return random;
}

function riempitore(num) {
  let arr = [];
for ( i = 0;i < num ; i++){
arr.push(i+1);

}
return arr;
}

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}


for(let x=0; x<16; x++){
 numeriPc.push(randomNumber(1,100));
}



while(contains(numeroInserito, numeriPc));
