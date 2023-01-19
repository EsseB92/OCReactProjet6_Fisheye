//Mettre le code JavaScript lié à la page photographer.html

let searchParams = new URLSearchParams(location.search);
let photographerId = searchParams.get('id');
var p, m;

async function getPhotographer() {
    try {
        const response = await fetch('./data/photographers.json')
        const data = await response.json();
        let photographer = data.photographers.find((photographer) => photographer.id == photographerId)
        return photographer
    }
    catch (e) {
        console.log
    }
}

async function getMedias() {
    try {
        const response = await fetch('./data/photographers.json')
        const data = await response.json();
        let medias = data.media.filter((media) => media.photographerId == photographerId)
        return medias
    }
    catch (e) {
        console.log(e);
    }
}


function displayPhotographer(photographer) {
    const photographerSection = document.querySelector(".photographer");
    const sidebarSection = document.querySelector(".sidebar__rates");
    const titleModal = document.querySelector(".modal__title");

    const photographerModel = photographerFactory(photographer);
    const userHeaderDOM = photographerModel.getUserHeaderDOM();
    const [header, button, image, rate] = userHeaderDOM;
    photographerSection.appendChild(header);
    photographerSection.appendChild(button);
    photographerSection.appendChild(image);
    
    sidebarSection.appendChild(rate);
    titleModal.textContent = "Contacter " + photographerModel.name
};

function displayMedias(medias) {
    const mediasSection = document.querySelector(".medias");
    const sidebarSection = document.querySelector(".sidebar__like");

    let countMedia = 0;
    
    medias.forEach((media) => {
        let mediaCardDOM;
        const mediaModel = mediaFactory(media);
        const type = getTypeOfMedia(media)
        if(type === "image"){
            mediaCardDOM = mediaModel.getImageCardDOM();
        }else if(type === "video"){
            mediaCardDOM = mediaModel.getVideoCardDOM();
        }else{
            console.log("Erreur d'extension de fichier !")
        }
        mediasSection.appendChild(mediaCardDOM);
        countMedia += media.likes
    });
    
    sidebarSection.textContent = countMedia;
};

function getTypeOfMedia(media) {
    if(media.image !== undefined){
        console.log("image")
        return "image"
    } else if(media.video !== undefined){
        console.log("video")
        return "video"
    }else return 0
}

/* Lightbox */

function displayMediaByLightBox(id) {
    const mediaDOM = document.querySelectorAll('.media__image,.media__video')
    const lightboxDOM = document.getElementById('lightbox')
    
    m.forEach((media) => {
        if(media.id === id){
            let mediaLightboxDOM;
            const mediaModel = mediaFactory(media);
            const type = getTypeOfMedia(media)
            if(type === "image"){
                mediaLightboxDOM = mediaModel.getImageLightBoxDOM();
            }else if(type === "video"){
                mediaLightboxDOM = mediaModel.getVideoLightBoxDOM();
            }else{
                console.log("Erreur d'extension de fichier !")
            }

            const [prev, next, close, div] = mediaLightboxDOM
            lightboxDOM.innerText = "";
            console.log(lightboxDOM)
            lightboxDOM.append(prev)
            lightboxDOM.appendChild(next)
            lightboxDOM.appendChild(close)
            lightboxDOM.appendChild(div)
        }
    })
}

function nextMedia(id){
    var count = 0;

    if(m.slice(-1)[0].id === id){
        displayMediaByLightBox(m.slice(0)[0].id)
    }

    m.forEach((media) => {
        if(count === 1){
            count = 0;

            displayMediaByLightBox(media.id);
        }else if(media.id === id){
            count = 1;
        }
    })
}

function prevMedia(id){
    var count = -1;

    if(m.slice(0)[0].id === id){
        displayMediaByLightBox(m.slice(-1)[0].id)
    }

    m.forEach((media) => {
        count++;
        if(media.id === id){
            displayMediaByLightBox(m.slice(count-1)[0].id)
        }
    })
}




/* INIT */

async function init() {
    // Récupère les datas du photographe
    [p, m] = await Promise.all([getPhotographer(), getMedias()])
    //const [photographer, medias] = await getPhotographer();
    //const { medias } = await getMedias();
    console.log(m)
    displayPhotographer(p); 
    displayMedias(m);
};
    
init();