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
function randomNumber(min, max) {
  var random = Math.floor( Math.random() * (max - min +1) ) + min;
  return random;
}

var numeriPc = [];


for(var x=0; x<16; x++){
  numeriPc.push(randomNumber(1,100))
 if(numeriPc.includes(randomNumber)){
   continue;
 }
}

for(var i = 0; i<= 84; i++){
  var numeroInserito = parseInt(prompt('inserisci un numero da 1 a 100 fino a quando non vinci'));
  if(numeriPc.includes(numeroInserito)){
    alert('Hai perso '+'hai totalizzato ' + i +' punti');
    breack
  }
  else{
    continue;
  }
}
