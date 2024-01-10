
//CAMBIARE PAGINA//

//BOTTONE ABBONAMENTI//

// Otteniamo il riferimento al bottone
const bottoneAbbonamenti = document.getElementById('abbonamenti');

// Aggiungiamo un gestore di eventi al clic del bottone
bottoneAbbonamenti.addEventListener('click', function () {
    // Cambiamo l'URL della pagina corrente
    window.location.href = 'http://127.0.0.1:5500/Abbonamenti%20prezzi.html';
});

//BOTTONE INFO//

// Otteniamo il riferimento al bottone
const bottoneInfo = document.getElementById('info');

// Aggiungiamo un gestore di eventi al clic del bottone
bottoneInfo.addEventListener('click', function () {
    // Cambiamo l'URL della pagina corrente
    window.location.href = 'http://127.0.0.1:5500/Info.html';
});



function changePage(url) {
    window.location.href = url;
}

// Funzione per salvare la lingua selezionata
function saveLanguage() {
    var selectElement = document.getElementById('languageSelect');
    var selectedLanguageIndex = selectElement.selectedIndex;
    localStorage.setItem('selectedLanguage', selectedLanguageIndex);
}

// Funzione per caricare la lingua precedentemente selezionata
function loadSelectedLanguage() {
    var selectElement = document.getElementById('languageSelect');
    var selectedLanguageIndex = localStorage.getItem('selectedLanguage');
    if (selectedLanguageIndex !== null) {
        selectElement.selectedIndex = selectedLanguageIndex;
    }
}

// Carica la lingua selezionata al caricamento della pagina
window.onload = function () {
    loadSelectedLanguage();
};

// Funzione per cambiare pagina e salvare la lingua selezionata
function changePage(url) {
    saveLanguage();
    window.location.href = url;
}

//FUNZIONE INGRADIMENTO CARD//


function enlargeCard(element) {
    element.style.transform = 'scale(1.1)';
}

function shrinkCard(element) {
    element.style.transform = 'scale(1)';
}


//DIMINUIRE AUMENTARE QUANTITA' (FUNZIONA SU UNA SOLA CARD)//


let counterValue = 0; // Valore iniziale del contatore

function addToCart() {
    // Funzione per aggiungere l'elemento al carrello con il valore attuale del contatore
    console.log(`Aggiunto al carrello: ${counterValue}x Ravioli di verdure 3pz`);
}

// Quando viene cliccato il pulsante "AGGIUNGI AL CARELLO", la funzione addToCart verrà chiamata, registrando il valore corrente del contatore nella console (puoi sostituire console.log con l'azione effettiva che desideri eseguire).

function incrementCounter() {
    // Funzione per incrementare il contatore
    counterValue++;
    updateCounter();
}

function decrementCounter() {
    // Funzione per decrementare il contatore se il valore è maggiore di 0
    if (counterValue > 0) {
        counterValue--;
        updateCounter();
    }
}

function updateCounter() {
    // Funzione per aggiornare il valore visualizzato nel contatore
    const counterSpan = document.querySelector('.counter');
    counterSpan.textContent = counterValue;
}



//COLORE RBG CARD//

var card = document.getElementById('myCard');

card.addEventListener('mouseover', function () {
    var randomColor = getRandomColor(); // Funzione per ottenere un colore casuale
    card.style.backgroundColor = randomColor;
});

card.addEventListener('mouseout', function () {
    card.style.backgroundColor = '#ccc'; // Ripristina il colore predefinito al passaggio del mouse
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}





// Funzioni per incrementare e decrementare la quantità nella card
function incrementCounter(element) {
    const counter = element.parentNode.querySelector('.counter');
    let count = parseInt(counter.innerText);
    counter.innerText = ++count;

    
}

function decrementCounter(element) {
    const counter = element.parentNode.querySelector('.counter');
    let count = parseInt(counter.innerText);
    if (count > 0) {
        counter.innerText = --count;
    }

    
}



// Funzione per aggiungere articoli allo scontrino

function addToCart(card) {
    const cardTitle = card.querySelector('.card-title').innerText;
    const cardPriceText = card.querySelector('.card-text').innerText;
    const cardPrice = parseFloat(cardPriceText.split('€')[1].trim());
    const quantity = parseInt(card.querySelector('.counter').innerText);

    if (quantity > 0) {
        const scontrinoList = document.getElementById('scontrino-list');

        // Controlla se l'articolo è già presente nello scontrino
        let existingItem = null;
        Array.from(scontrinoList.children).forEach(item => {
            if (item.dataset.title === cardTitle) {
                existingItem = item;
            }
        });

        if (existingItem) {
            const existingQuantity = parseInt(existingItem.querySelector('.scontrino-quantity').innerText);
            existingItem.querySelector('.scontrino-quantity').innerText = existingQuantity + quantity;
            const existingPriceText = existingItem.querySelector('.scontrino-price').innerText;
            const existingPrice = parseFloat(existingPriceText.split('€')[1].trim());
            existingItem.querySelector('.scontrino-price').innerText = `€${(existingPrice + (cardPrice * quantity)).toFixed(2)}`;
        } else {
            const listItem = document.createElement('li');
            listItem.dataset.title = cardTitle;
            listItem.classList.add('scontrino-item');
            listItem.innerHTML = `${cardTitle} - Quantità: <span class="scontrino-quantity">${quantity}</span> - Prezzo: <span class="scontrino-price">€${(cardPrice * quantity).toFixed(2)}</span>`;
            scontrinoList.appendChild(listItem);
        }

        // Calcola e mostra il totale aggiornato
        calcolaTotale();



/* RISOLVE IL PROBLEMA DEL AGGIUNTA MA ELIMINA SUL HTML IL BOTTONE INCREMENTE E DIMINUISCI 
        // Resetta la quantità nella card a 0 dopo l'aggiunta allo scontrino
        card.querySelector('.counter').innerText = "0";*/
    }

}



// Funzione per calcolare e mostrare il totale degli articoli nello scontrino
function calcolaTotale() {
    const scontrinoItems = document.querySelectorAll('.scontrino-item');
    let totale = 0;

    scontrinoItems.forEach(item => {
        const priceText = item.querySelector('.scontrino-price').innerText;
        const price = parseFloat(priceText.split('€')[1].trim());
        totale += price;
    });

    const totaleArticoliElement = document.getElementById('totaleArticoli');
    totaleArticoliElement.innerText = `Totale: €${totale.toFixed(2)}`;
}

//CANCELLARE LE VOCI SCONTRINO

// Funzione per cancellare tutte le voci nello scontrino
function cancellaVoci() {
    const scontrinoList = document.getElementById('scontrino-list');
    scontrinoList.innerHTML = ''; // Rimuove tutte le voci
    // Resetta il totale
    const totaleArticoliElement = document.getElementById('totaleArticoli');
    totaleArticoliElement.innerText = 'Totale: €0.00';
}

//APPARIRE SCONTRINO

function apparireScontrino() {
    var scontrinoDiv = document.getElementById('scontrino');
    scontrinoDiv.classList.toggle('scontrinox');
}

function enlargeCard(element) {
    element.style.transform = 'scale(1.1)';
}

function shrinkCard(element) {
    element.style.transform = 'scale(1)';
}

//BOTTONE PAGA

// Otteniamo il riferimento al bottone
const bottonePaga = document.getElementById('paga');

// Aggiungiamo un gestore di eventi al clic del bottone
bottonePaga.addEventListener('click', function () {
    // Cambiamo l'URL della pagina corrente
    window.location.href = 'http://127.0.0.1:5500/Abbonamenti%20prezzi.html';
});

//BOTTONE STAMPA//

// Funzione per stampare solo il contenuto del div dello scontrino
function stampa() {
    const scontrinoDiv = document.getElementById('scontrino');
    const content = scontrinoDiv.innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = content;
    window.print();
    document.body.innerHTML = originalContent;
}










