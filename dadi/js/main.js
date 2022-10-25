"use strict"


const cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(cpuNumber, "Numero Cpu")

const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber, "Numero Utente")

if (cpuNumber > userNumber){
    alert("Hai perso!")
} else if (cpuNumber === userNumber){
    alert("Pareggio!")
} else {
    alert("Hai Vinto!")
}