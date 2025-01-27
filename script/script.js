// Milestone 3
// Inseriamo il JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

//seleziono gli elementi di ouput
const label = document.querySelector(".container");
const closureButton = document.querySelector('.closure-button');
//richiamo l'elemento di output che dovrò ingrandire
const overlay = document.querySelector('.overlay');

// Seleziona tutte le immagini che apriranno l'overlay

const imgOver = document.querySelector('.img-over');



//creo una costante e setto i parametri dell'endpoint
const endPoint = "https://lanciweb.github.io/demo/api/pictures/";


//faccio partire la richiesta con axios per ricere le immagini relattive
axios.get(endPoint)
    //in caso di successo
    .then(responseObj =>{
        const posts = responseObj.data;
        // console.log(posts);
        
       // Cicla attraverso ogni post e genera dinamicamente il contenuto
       posts.forEach(post => {
        const { url, date, title } = post;

        // Aggiungi un contenitore con immagine e testo
        label.innerHTML += `
            <div class="container-label fullpage">
                <div class="container-img">
                    <img class="pin" src="./img/pin.svg" alt="">
                    <img src="${url}" alt="" class="open-overlay">
                </div>

                <div class="container-text">
                    <div class="date">${date}</div>
                    <h2>${title}</h2>
                </div>
            </div>
        `;
    });
    
    //richiamo la costante all'interno del ciclo
    const openOverlayImages = document.querySelectorAll('.open-overlay');
    // Funzione per aprire l'overlay con l'immagine cliccata
    function openOverlay(imgSrc) {
        // Mostra l'overlay aggiungendo la classe
        overlay.classList.add('show'); 
        // Cambia l'immagine nell'overlay con quella cliccata
        imgOver.src = imgSrc; 
    }
    
    // Aggiungi l'evento di clic su tutte le immagini
    openOverlayImages.forEach(image => {
    //aggiungo la funzione sul click dell'utente
        image.addEventListener('click', function() {
            // Passa l'src dell'immagine al metodo openOverlay
            openOverlay(image.src); ù
        });
    });

    // Chiudi l'overlay quando clicchi sul bottone di chiusura
    closureButton.addEventListener('click', function() {
        // rimuovo la classe sull'overlay l'overlay una volta cliccato 
        overlay.classList.remove('show'); // Nasconde l'overlay
    });

})
.catch(error => {
    console.log(error);
});
    









