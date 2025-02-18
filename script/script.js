// chiedo anni e km all'utente
let UserAnni = prompt("quanti anni hai?");
let UserKm = prompt("quanti km devi percorrere?");
// se non viene inserito un valore valido dico di riprovare
if (isNaN(UserAnni) || isNaN(UserKm) || (UserKm == "" || UserAnni == "")){
    alert("hai inserito un valore non valido,riprova");
}
 else {
    //converto le variabili in numeri
    parseInt(UserAnni);
    parseInt(UserKm);
    // a seconda dell'età inserita applico i vari sconti e comunico il prezzo all'utente
    if (UserAnni < 18){
     let CostoBiglietto = ((0.21 * UserKm) - ((0.21 * UserKm) * 20 / 100));
     alert(`il prezzo è di ${CostoBiglietto.toFixed(2)}€`);
    }
    else if (UserAnni > 65){
        let CostoBiglietto = ((0.21 * UserKm) - ((0.21 * UserKm) * 40 / 100));
        alert(`il prezzo è di ${CostoBiglietto.toFixed(2)}€`);
    }
    else {
        let CostoBiglietto = (0.21 * UserKm)
        alert(`il prezzo è di ${CostoBiglietto.toFixed(2)}€`);
    }
} 

