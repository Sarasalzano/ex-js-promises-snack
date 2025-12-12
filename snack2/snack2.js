// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado() {
  //Creo una promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.2) {
        // 20% dei casi
        reject("Dado incastrato!");
      } else {
        // 80% dei casi
        let numero = Math.floor(Math.random() * 6) + 1;
        resolve(numero);
      }
    }, 3000);
  });
}

lanciaDado()
.then(numero => console.log(`Hai tirato il numero ${numero}`))
.catch(error => console.error(error))
