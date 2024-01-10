//CAMBIARE PAGINA//

//BOTTONE HOME//

// Otteniamo il riferimento al bottone
const bottonehome = document.getElementById('home');

// Aggiungiamo un gestore di eventi al clic del bottone
bottonehome.addEventListener('click', function() {
  // Cambiamo l'URL della pagina corrente
  window.location.href = 'http://127.0.0.1:5500/men%C3%B9%20sushi.html#';
});

//BOTTONE INFO//

// Otteniamo il riferimento al bottone
const bottoneInfo = document.getElementById('info');

// Aggiungiamo un gestore di eventi al clic del bottone
bottoneInfo.addEventListener('click', function() {
  // Cambiamo l'URL della pagina corrente
  window.location.href = 'http://127.0.0.1:5500/Info.html';
});

//FUNZIONE INGRADIMENTO CARD//

function enlargeCard(element) {
  element.style.transform = 'scale(1.1)';
}

function shrinkCard(element) {
  element.style.transform = 'scale(1)';
}

//FUNZIONE CAMBIA COLORE BOTTONE E FARLO TORNARE AL COLORE PRECEDENTE//

function toggleColor(button) {
  button.classList.toggle("clicked");
}



//CAMBIO MODALE//

function toggleModal() {
  var modal = document.getElementById('modal');

  // Verifica se il div modale esiste già nel documento
  if (!modal) {
    // Creazione del div modale
    var newModal = document.createElement('div');
    newModal.id = 'modal';
    newModal.className = 'modale';
    newModal.style.display = 'none';
    newModal.style.backgroundImage = "url('/dojo.jpg')";
    newModal.style.backgroundSize = 'cover';
    newModal.style.width = '50vw';
    newModal.style.height = '70vh';
    newModal.style.position = 'fixed';
    newModal.style.top = '50%';
    newModal.style.left = '50%';
    newModal.style.transform = 'translate(-50%, -50%)';
    newModal.style.zIndex = '9999';
    newModal.style.color = 'white';

    // Creazione del form all'interno del div modale
    var form = document.createElement('form');
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.justifyContent = 'space-around';
    form.style.alignItems = 'center';
    form.style.height = '80%';

    // Creazione dei label e input per il form
    var labelNome = createLabel('Nome', 'nome');
    var inputNome = createInput('text', 'nome', true);

    var labelCognome = createLabel('Cognome', 'cognome');
    var inputCognome = createInput('text', 'cognome', true);

    var labelEmail = createLabel('Email', 'email');
    var inputEmail = createInput('email', 'email', true);

    var labelIndirizzo = createLabel('Indirizzo', 'indirizzo');
    var inputIndirizzo = createInput('text', 'indirizzo', true);

    var labelSesso = createLabel('Sesso', 'sesso');
    var selectSesso = createSelect('sesso', ['Maschio', 'Femmina', 'Altro']);

    var labelAbbonamento = createLabel('Abbonamento', 'abbonamento');
    var selectAbbonamento = createSelect('abbonamento', ['20 Ingressi', '50 Ingressi', '100 Ingressi']);

    var labelPassword = createLabel('Password', 'password');
    var inputPassword = createInput('password', 'password', true);

    // Creazione del pulsante di invio del form
    var submitButton = document.createElement('button');
    submitButton.textContent = 'Invio';
    submitButton.onclick = invioForm; // Funzione per gestire l'invio del form

    // Creazione del pulsante di chiusura del modale
    var closeButton = document.createElement('button');
    closeButton.textContent = 'Chiudi';
    closeButton.onclick = function() {
      newModal.style.display = 'none';
    };

    // Aggiunta degli elementi al form e del form al div modale
    form.appendChild(labelNome);
    form.appendChild(inputNome);
    form.appendChild(labelCognome);
    form.appendChild(inputCognome);
    form.appendChild(labelEmail);
    form.appendChild(inputEmail);
    form.appendChild(labelIndirizzo);
    form.appendChild(inputIndirizzo);
    form.appendChild(labelSesso);
    form.appendChild(selectSesso);

    form.appendChild(labelAbbonamento);
    form.appendChild(selectAbbonamento);

    form.appendChild(labelPassword);
    form.appendChild(inputPassword);
    form.appendChild(submitButton);
    form.appendChild(closeButton);
    newModal.appendChild(form);

    // Aggiunta del div modale al documento
    document.body.appendChild(newModal);

    modal = newModal; // Assegna il nuovo div modale alla variabile modal
  }

  // Mostra o nascondi il div modale
  if (modal.style.display === 'none' || modal.style.display === '') {
    modal.style.display = 'block';
  } else {
    modal.style.display = 'none';
  }
}

// Funzione di utilità per creare label
function createLabel(text, htmlFor) {
  var label = document.createElement('label');
  label.textContent = text;
  label.htmlFor = htmlFor;
  return label;
}

// Funzione di utilità per creare input
function createInput(type, id, required) {
  var input = document.createElement('input');
  input.type = type;
  input.id = id;
  input.name = id;
  input.required = required;
  return input;
}

// Funzione di utilità per creare select
function createSelect(id, optionsArray) {
  var select = document.createElement('select');
  select.id = id;
  select.name = id;
  optionsArray.forEach(function(optionText) {
    var option = document.createElement('option');
    option.value = optionText.toLowerCase();
    option.textContent = optionText;
    select.appendChild(option);
  });
  return select;
}

// Funzione per gestire l'invio del form
function invioForm() {
  var nome = document.getElementById('nome').value;
  var cognome = document.getElementById('cognome').value;
  var email = document.getElementById('email').value;
  var indirizzo = document.getElementById('indirizzo').value;
  var sesso = document.getElementById('sesso').value;
  var sesso = document.getElementById('abbonamento').value;
  var password = document.getElementById('password').value;

  console.log('Nome:', nome);
  console.log('Cognome:', cognome);
  console.log('Email:', email);
  console.log('Indirizzo:', indirizzo);
  console.log('Sesso:', sesso);
  console.log('Abbonamento:', abbonamento);
  console.log('Password:', password);
  

  // Qui puoi gestire l'invio dei dati o eseguire altre operazioni con i dati del form
  // Ad esempio, puoi inviare i dati a un server tramite una richiesta AJAX
}

//MODALE INVIO DATI//

// Funzione per gestire l'invio del form
function invioForm() {
  var nome = document.getElementById('nome').value;
  var cognome = document.getElementById('cognome').value;
  var email = document.getElementById('email').value;
  var indirizzo = document.getElementById('indirizzo').value;
  var sesso = document.getElementById('sesso').value;
  var abbonamento = document.getElementById('abbonamento').value; // Corretto identificatore
  var password = document.getElementById('password').value;

  // Creazione della stringa con i dati
  var dati = `
    <p>Nome: ${nome}</p>
    <p>Cognome: ${cognome}</p>
    <p>Email: ${email}</p>
    <p>Indirizzo: ${indirizzo}</p>
    <p>Sesso: ${sesso}</p>
    <p>Abbonamento: ${abbonamento}</p>
    <p>Password: ${password}</p>
  `;

  // Aggiunta dei dati al div dei dati visualizzati
  var datiContainer = document.getElementById('datiContainer');
  datiContainer.innerHTML = dati;

  // Visualizza il div con i dati
  var datiVisualizzati = document.getElementById('datiVisualizzati');
  datiVisualizzati.style.display = 'block';

    // Nasconde il modale originale
    var modal = document.getElementById('modal');
    modal.style.display = 'none';

  
  
}

// Funzione per chiudere il div dei dati visualizzati
function chiudiDati() {
  var datiVisualizzati = document.getElementById('datiVisualizzati');
  datiVisualizzati.style.display = 'none';
}

function sempreBella() {

  var chiudi = document.getElementById('modal');
    chiudi.style.display = 'block';


  
}




//CAMBIO IMMAGINE//

//CAMBIA IMMAGINE CON TEMPO//

//let interval; // Variabile per memorizzare l'intervallo NON FUNZIONA NON TROVA L IMMAGINE
/*
    // Funzione per cambiare l'immagine ogni 5 secondi
    function changeImageEveryFiveSeconds(element, images) {
        let index = 0; // Indice dell'immagine corrente
        interval = setInterval(() => {
            element.style.backgroundImage = `url('${images[index]}')`;
            index = (index + 1) % images.length; // Passa alla successiva immagine, riparte dall'inizio se si raggiunge la fine dell'array
        }, 100); // Cambia ogni 5 secondi (5000 millisecondi)
    }

    // Funzione per avviare l'intervallo
    function startInterval() {
        const imagesSinistra = ['/d1.webp', '/samurai 1.avif', '/samurai 3.jpg']; // Array delle immagini per la sezione sinistra
        const imagesCentro = ['nuova_immagine_centro_1.jpg', 'nuova_immagine_centro_2.jpg', 'nuova_immagine_centro_3.jpg']; // Array delle immagini per la sezione centro
        const imagesDestra = ['nuova_immagine_destra_1.jpg', 'nuova_immagine_destra_2.jpg', 'nuova_immagine_destra_3.jpg']; // Array delle immagini per la sezione destra

        changeImageEveryFiveSeconds(document.querySelector('.sinistra .card'), imagesSinistra);
        changeImageEveryFiveSeconds(document.querySelector('.centro .card'), imagesCentro);
        changeImageEveryFiveSeconds(document.querySelector('.destra .card'), imagesDestra);
    }

    // Funzione per fermare l'intervallo
    function stopInterval() {
        clearInterval(interval);
    }

    // Avvia l'intervallo all'avvio della pagina
    startInterval();

//NON FUNZIONA//
/*
function changeBackground(element, newImage) {
  element.style.backgroundImage = `url('${newImage}')`;
}

function restoreBackground(element, originalImage) {
  element.style.backgroundImage = `url('${originalImage}')`;
}
*/

/*function changeimage(abbonati) {

  var img = document.getElementById('abbonati');

  img.src = "samurai drago 1.webp"  ;
  
}*/

/*//CAMBIO IMMAGINE

function changeBackground() {
  document.getElementById('card').style.backgroundImage = "url('samurai drago 1.webp')";
}

function restoreBackground() {
  document.getElementById('card').style.backgroundImage = "url('samurai 1.avif')";
}

function toggleColor() {
  var button = document.getElementById('abbonati');
  button.classList.toggle("clicked");
}

function openModal() {
  // Aggiungi qui la logica per aprire il modale
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Assicurati che la chiusura del modale sia gestita correttamente

window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
      modal.style.display = "none";
  }
}*/