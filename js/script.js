// Creare variabili utili
// Raccogliere i dati inseriti nel form
// Calcolare il prezzo del biglietto in base alla percorrenza
// Applicare uno sconto in base all'età
// Calcolare il totale
// Stampare i dati nei rispettivi campi

// Elementi del form
var getFullName = document.getElementById('fullname');
var getDistance = document.getElementById('distance');
var getAge = document.getElementById('age');
var button = document.getElementById('calculate-ticket');

// Elementi biglietto
var printName = document.getElementById('ticket-name');
var printDiscount = document.getElementById('applied-discount');
var printTrainNumber = document.getElementById('train-number');
var printCarriage = document.getElementById('carriage');
var printPrice = document.getElementById('price');

// =============== TEST WORKING ===============

// console.log(getFullName);
// console.log(getDistance);
// console.log(getAge);
// console.log(printName);
// console.log(printDiscount);
// console.log(printTrainNumber);
// console.log(printCarriage);
// console.log(printPrice);

//==============================================

// Evento al click del button
button.addEventListener('click', function () {

    // Esegui al click del button

    // Clear HTML (Ad ogni click l'HTML tornerà alla sua situazione di default) ???????????????????????????????????

    // Recuperare i dati inseriti nel form
    var nameValue = getFullName.value;
    var distanceValue = getDistance.value;
    var ageValue = getAge.value;

    // Calcolare il prezzo del biglietto in base alla percorrenza
    var basePrice = 0.21 * distanceValue;
    var baseDiscount = ' Tariffa standard';

    // Verificare l'età dell'utente
    if (ageValue === 'minor') {
        // Applicare lo sconto del 20%
        basePrice *= 0.8;
        baseDiscount = ' Tariffa minorenni';
    }
    if (ageValue === 'over65') {
        // Applicare lo sconto del 40%
        basePrice *= 0.6;
        baseDiscount = ' Tariffa over 65 anni';
    }

    // Creare un generatore di numeri random compresi tra 10000 e 19999 per il numero del treno
    var trainNumber = Math.floor(Math.random() * (19999 - 10000) + 10000);

    // Creare un generatore di numeri random compresi tra 1000 e 1999 per il numero della carrozza
    var carriageNumber = Math.floor(Math.random() * (1999 - 1000) + 1000);

    // Stampare gli input all'interno della pagina HTML
    printName.innerHTML = nameValue;
    printDiscount.innerHTML = baseDiscount;
    printTrainNumber.innerHTML = trainNumber;
    printCarriage.innerHTML = carriageNumber;
    printPrice.innerHTML = basePrice.toFixed(2) + ' Euro';

})

// =========================== CLEAR BUTTON =============================


var clearButton = document.getElementById('clear-ticket');

clearButton.addEventListener('click', function () {

    // Rimuovere 
    var getPrinted = document.getElementsByClassName('printed');

    for (var i = 0; i < getPrinted.length; i++) {
        var currentPrinted = getPrinted[i];
        currentPrinted.innerHTML = '';
    }
})


// =======================================================================