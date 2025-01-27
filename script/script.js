// Milestone 3
// Inseriamo il JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

//seleziono gli elementi di ouput
const label = document.querySelector(".container");

//richiamo l'elemento di output che dovrò ingrandire


//creo una costante e setto i parametri dell'endpoint
const endPoint = "https://lanciweb.github.io/demo/api/pictures/";


//faccio partire la richiesta con axios per ricere le immagini relattive
axios.get(endPoint)
    //in caso di successo
    .then(responseObj =>{
        const posts = responseObj.data;
        // console.log(posts);
        
        //creo un ciclo sull'array ricevuta per estrapolare i suoi oggetti
        for (let i = 0; i < posts.length; i++) {

            //creo una variabile e valorizzo il ciclo 
            let post = posts[i]
            console.log(post);

            //destrutturo l'ogetto
            const {url, date, title } = post;

            //utilizzo il template literal per creare il template e copio il codice html per stamparlo in pagina
            label.innerHTML += `
                <div class="container-label fullpage">

                    <div class="container-img">
                        <img class="pin" src="./img/pin.svg" alt="">
                        <img src="${url}" alt="">
                    </div>
    
                    <div class="container-text">
                        <div class="date">${date}</div>
                        <h2>${title}</h2>
                    </div>
                </div>
  
             `
        }

        //altrimenti manda messaggio di errore
    })   .catch(error => {
        console.log(error);
        

    });
        

