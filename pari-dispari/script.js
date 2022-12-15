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
    4d - Sommo i numeri;
    4e - Stampo in pagina;
    4f - Determina il vincitore;
    4g - Stampa il pagina il vincitore;
*/

// 1 - Prendo gli elementi dal DOM;
const form = document.getElementById('form');
const inputPlayer = document.getElementById('input-number');
const numberType = document.getElementById('number-type');
const player = document.getElementById('player');
const cpu = document.getElementById('cpu');
const sum = document.getElementById('sum');
const winner = document.getElementById('winner');


// 3 - Creo una funzione che stabilisce se un numero è pari o dispari;
function isEven(number){

    let result = number % 2 === 0 ? true : false;
    return result;
}

// 4 - Aggancio l'event listener al input invia;
form.addEventListener('submit', function(event){
event.preventDefault();

// 2 - Creo una funzione per generare un numero random;
    function getRandomNumber(min, max){
        max++;
        const randomNumber = Math.floor(Math.random() * (max - min)) + min;
        return randomNumber;
    }
    const cpuNumber = parseInt(getRandomNumber(1, 5));
    console.log(cpuNumber);
    
    // 4a - Recupero valore dell'input;
    const playerNumber = parseInt(inputPlayer.value.trim());
    console.log(playerNumber);

    // Recupero valore della select;
    const userChoice = numberType.value;
    console.log(userChoice);
    
    // 4b - Validazione dell'input;
    if (isNaN(playerNumber) || !playerNumber || playerNumber <= 0 || playerNumber > 5){
        alert('Devi inserire un numero tra 1 e 5!');
        return;
    }

    // 4c - Svuoto il campo del numero;
    inputPlayer.value = '';

    // 4d - Sommo i numeri;
    const sumNumber = cpuNumber + playerNumber;
    console.log(sumNumber);

    // 4e - Stampo in pagina;
    player.innerHTML = '<strong>Numero Utente: </strong>' + playerNumber;
    cpu.innerHTML = '<strong>Numero Cpu: </strong>' + cpuNumber;
    sum.innerHTML = '<strong>Somma: </strong>' + sumNumber;

    // 4f - Determina il vincitore;
    let result = '';
    if (isEven(sumNumber) && userChoice === 'pari') {
        result = "Vince l'utente!";
    } else if (!isEven(sumNumber) && userChoice === 'dispari') {
        result = "Vince l'utente!";
    } else {
        result = "Vince il computer!";
    }
    console.log(result);

    // 4g - Stampo in pagina il vincitore;
    winner.innerHTML =`<strong>Esito: </strong><strong class="text-danger">${result}</strong>`;

    }); 





    






