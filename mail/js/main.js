"use strict"

const addressArray = [ "stefano@gmail.com", "luca@gmail.com", "marco@gmail.com", "giovanni@gmail.com"]
const emailAddress=prompt("Scrivi il tuo indirizzo e-mail");

for (let i = 0; i < addressArray.length; i++) {
    const element = addressArray[i];
    if (emailAddress === element){
        alert("Accesso possibile")
    } else {
        alert("Accesso non possibile")
    }

    break
}