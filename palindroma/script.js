console.log('JS OK');

/*
Palidroma
Chiedere all’utente di inserire una parola tramiite un form-
Creare una funzione per capire se la parola inserita è palindroma
*/

/*
1 - Prendo gli elementi dal DOM;
2 - Creo una funzione che deve restituire un valore booleano (vero se palindroma, falso se non);
    2a - Inverto la parola attraverso un ciclo for;
    2b - Controllo se la parola invertita è uguale alla parola inserita dall'utente;
3 - Aggancio l'event listener al input verifica;
    3a - Recupero valore dell'input;
    3b - Validazione dell'input;
    3c - Svuoto il campo del nome;
    3d - Controllo se la parola è palindroma;
    3e - Stampo un messaggio sull'esito del controllo;
*/

// 1 - Prendo gli elementi dal DOM;
const inputWord = document.getElementById('input-word');
const form = document.getElementById('form');
const answer = document.getElementById('answer');

// 2 - Creo una funzione che deve restituire un valore booleano (vero se palindroma, falso se non);
function isPalindrome(word){

    word = word.trim().toLowerCase();
    let reversedWord = "";
    // 2a - Inverto la parola attraverso un ciclo for;
    for (let i = word.length - 1; i >= 0; i--){
        reversedWord += word[i];
    }
    // 2b - Controllo se la parola invertita è uguale alla parola inserita dall'utente;
    return reversedWord === word;
}

// 3 - Aggancio l'event listener al submit del form;
form.addEventListener('submit', function(event){
event.preventDefault();

    // 3a - Recupero valore dell'input;
    const userWord = inputWord.value.trim();
    console.log(userWord);

    // 3b - Validazione dell'input;
    if (!isNaN(userWord)){
        alert('Devi inserire almeno una lettera!');
        return;
    }

    // 3c - Svuoto il campo della parola;
    inputWord.value = '';

    let content = "La parola non è palindroma!";
    // 3d - Controllo se la parola è palindroma
    if (isPalindrome(userWord)) {
    content = "La parola è palindroma!";
    } 

    // 3e - Stampo un messaggio sull'esito del controllo;
    answer.innerHTML = `<strong>${content}</strong>`;
});





