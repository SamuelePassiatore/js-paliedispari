console.log('JS OK');

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramite un form.
Generiamo un numero random sempre da 1 a 5 per il computer usando una funzione.
Sommiamo i due numeri.
Stabiliamo se la somma dei due numeri è pari o dispari usando una funzione.
Dichiariamo chi ha vinto.
*/

/*
1 - Prendo gli elementi dal DOM;
2 - Creo una funzione per generare un numero random;
3 - Creo una funzione che stabilisce se un numero è pari o dispari;
4 - Aggancio l'event listener al input invia;
    4a - Recupero valore dell'input;
    4b - Validazione dell'input;
    4c - Svuoto il campo del numero;
5 - Sommo i numeri;
6 - Stampo in pagina;
*/

// 1 - Prendo gli elementi dal DOM;
const form = document.getElementById('form');
const inputPlayer = document.getElementById('input-number');
const player = document.getElementById('player');
const cpu = document.getElementById('cpu');
const sum = document.getElementById('sum');
const winner = document.getElementById('winner');

// 2 - Creo una funzione per generare un numero random;
function getRandomNumber(min, max){
    max++;
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber;
}
const cpuNumber = getRandomNumber(1, 5);
console.log(cpuNumber);

// 3 - Creo una funzione che stabilisce se un numero è pari o dispari;
function isEven(number){

    let result = number % 2 === 0 ? true : false;
    return result;
}

const answer = isEven(4);
console.log(answer);

// 4 - Aggancio l'event listener al input invia;
form.addEventListener('submit', function(event){
event.preventDefault();
    
    // 4a - Recupero valore dell'input;
    const playerNumber = inputPlayer.value.trim();
    console.log(playerNumber);
    
    // 4b - Validazione dell'input;
    if (isNaN(playerNumber) || !playerNumber || playerNumber <= 0 || playerNumber > 5){
        alert('Devi inserire un numero tra 1 e 5!');
        return;
    }
   
    }); 

    






