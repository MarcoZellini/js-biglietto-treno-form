/* 
    Descrizione:

    Scrivere un programma che chieda all’utente:
    Il numero di chilometri da percorrere
    Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.

    MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
    La risposta finale (o output) sarà anch’essa da scrivere in solo console.
    **DONE

    MILESTONE 2:
    Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
    Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
*/

const distanceElement = document.querySelector('#distance');
const ageElement = document.querySelector('#age');
const submitElement = document.querySelector('#submit');
const resetElement = document.querySelector('#reset');
const pricePerKm = 0.21;
let ticketPrice;

console.log('👉', distanceElement, ageElement, pricePerKm, ticketPrice);

submitElement.addEventListener('click', function (e) {
    console.log(e);
    e.preventDefault(); //serve per non far refreshare la pagina una volta premuto su submit

    const userAge = Number(ageElement.value);
    const distance = Number(distanceElement.value);
    let ticketType = "Biglietto Standard";

    if (userAge >= 0 && distance > 0) {
        console.log('❌', distance, 'km', userAge, 'anni');
        ticketPrice = pricePerKm * distance;


        if (userAge < 18) {
            ticketPrice -= ticketPrice * 0.2;
            ticketType = "Biglietto Under18"
        } else if (userAge >= 65) {
            ticketPrice -= ticketPrice * 0.4;
            ticketType = "Biglietto Over65"
        }
        console.log('⭕ Prezzo finale del biglietto: ', ticketPrice);

        document.querySelector('.passenger_name').innerHTML = "Zellini Marco";
        document.querySelector('.passenger_age').innerHTML = userAge;
        document.querySelector('.offer_type').innerHTML = ticketType;
        document.querySelector('.carriage_number').innerHTML = Math.ceil(Math.random() * 10);
        document.querySelector('.cp_code').innerHTML = Math.ceil(Math.random() * 90000) + 9999;
        document.querySelector('.distance').innerHTML = distance + "km";
        document.querySelector('.ticket_price').innerHTML = ticketPrice.toFixed(2);
        
        document.querySelector('table').classList.add('text-center');
        document.querySelector('.details').style.display = 'block';

    } else {
        console.log("Dati non inseriti correttamente");
    }

});

resetElement.addEventListener('click', function() {
    document.querySelector('.details').style.display = 'none';
});





