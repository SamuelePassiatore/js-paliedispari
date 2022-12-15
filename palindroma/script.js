console.log('JS OK');

/*
Palidroma
Chiedere all’utente di inserire una parola tramiite un form-
Creare una funzione per capire se la parola inserita è palindroma
*/

/*
1 - Prendo gli elementi dal DOM;
2 - Aggancio l'event listener al input verifica;
    2a - Recupero valore dell'input;
    2b - Validazione degli input raccolti;
    2c - Svuoto il campo del nome;
3 - Creo una funzione che deve restituire un valore booleano (vero se palindroma, falso se non);
4 - Stampo un messaggio sull'esito del controllo;
*/

// 1 - Prendo gli elementi dal DOM;
const inputWord = document.getElementById('input-word');
const form = document.getElementById('form');