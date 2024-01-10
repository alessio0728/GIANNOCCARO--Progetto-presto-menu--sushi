//CAMBIARE PAGINA//

//BOTTONE ABBONAMENTI//

// Otteniamo il riferimento al bottone
const bottoneAbbonamenti = document.getElementById('abbonamenti');

// Aggiungiamo un gestore di eventi al clic del bottone
bottoneAbbonamenti.addEventListener('click', function() {
  // Cambiamo l'URL della pagina corrente
  window.location.href = 'http://127.0.0.1:5500/Abbonamenti%20prezzi.html';
});

//BOTTONE HOME//

// Otteniamo il riferimento al bottone
const bottonehome = document.getElementById('home');

// Aggiungiamo un gestore di eventi al clic del bottone
bottonehome.addEventListener('click', function() {
  // Cambiamo l'URL della pagina corrente
  window.location.href = 'http://127.0.0.1:5500/men%C3%B9%20sushi.html#';
});

//BOTTONE STAMPA//

function stampa() {
  window.print();
}

