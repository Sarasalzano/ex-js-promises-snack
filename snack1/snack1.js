// Ottieni il titolo di un post con una Promise.

// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise
// che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

// Funzione che prende un id e restituisce una Promise 
function getTitle(id) { 
  // Creo una Promise 
  return new Promise((resolve, reject) => {
    // Chiamo fetch sull'indirizzo con l'id 
    fetch(`https://dummyjson.com/posts/${id}`) 
      // Quando arriva la risposta, trasformo in JSON 
      .then(response => response.json()) 

      // Quando il JSON è pronto, risolvo la Promise con i dati 
      .then(obj => resolve(obj.title)) 

      // Se la fetch fallisce, rigetto la Promise
      .catch(reject); 
  }); 
};



// Funzione che usa getTitle
function getPostTitle(id){
  return getTitle(id)
}

getPostTitle(1)
  .then(title => console.log(title))   // Stampo il titolo
  .catch(error => console.error(error)); // Stampo l'errore



 

