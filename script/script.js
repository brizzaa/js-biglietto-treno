// devo chiedere all'utente anni e km da percorrere
let UserAnni = prompt("quanti anni hai?");
let UserKm = prompt("quanti km devi percorrere?");
const CostoBiglietto = 0.21 * UserKm;
//controllo e se un valore non è un numero oppure non c'e e dico di riprovare
if (isNaN(UserAnni) || isNaN(UserKm) || (UserKm == "" || UserAnni == "")){
    alert("hai inserito un valore sbagliato,riprova");
}
 else {
    // converto in numeri poichè i numeri dati da prompt sono una stringa
    parseInt(UserAnni);
    parseInt(UserKm);
    // se utente ha meno di 18 anni applico uno sconto del 20% 
    if (UserAnni < 18){
        let ScontoMinorenni =  ((CostoBiglietto * 20) / 100);
        let PrezzoMinorenni = parseFloat(CostoBiglietto - scontoMinorenni);
        alert(`il prezzo è di ${prezzoMinorenni}€`);
    }
    // se utente ha piu di 65 anni applico sconto del 40% 
    else if (UserAnni > 65){
        let ScontoAnziani = ((CostoBiglietto * 40) / 100);
        let PrezzoAnziani = parseFloat(CostoBiglietto - ScontoAnziani);
        alert(`il prezzo è di ${PrezzoAnziani}`);
    }
    // se non ha meno di 18 e piu di 65 do il prezzo senza sconto
    else {
        alert(`il prezzo è di ${parseFloat(CostoBiglietto)}`);
    }
} 